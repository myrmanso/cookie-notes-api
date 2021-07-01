const Joi = require('joi');

class AuthMiddleware {
  constructor() {
    this.signupSchema = Joi.object()
      .options({ abortEarly: false })
      .keys({
        name: Joi.string().trim().min(3).max(100).required(),
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(6).max(100).required(),
      });

    this.loginSchema = Joi.object()
      .options({ abortEarly: false })
      .keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().min(6).max(100).required(),
      });
  }

  signup = (req, res, next) => {
    const validationErrors = this.signupSchema.validate(req.body);

    if (validationErrors.error) {
      return res.status(400).json(this.mountErrorMessage(validationErrors.error.details));
    }

    next();
  }

  login = (req, res, next) => {
    const validationErrors = this.loginSchema.validate(req.body);

    if (validationErrors.error) {
      return res.status(400).json(this.mountErrorMessage(validationErrors.error.details));
    }

    next();
  }

  mountErrorMessage = errorDetails => {
    const fieldErrors = errorDetails.map(error => {
      return {
        field: error.context.key,
        message: error.message,
      };
    });

    const errorMessage = {
      message: 'There was a problem with your request',
      errors: fieldErrors,
    };

    return errorMessage;
  }

}

module.exports = new AuthMiddleware();
