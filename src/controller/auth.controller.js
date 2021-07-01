const UserService = require('../service/Users.service');
const { encryptPassword, verifyPassword } = require('../../utils/passwordManager.util');
const WebToken = require('../../utils/webToken.util');

class AuthController {
  signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
      const userFromDb = await UserService.findOne({ email });

      if (userFromDb) return res.status(400).json({ message: 'Email has alredy been used' });

      const passwordEncrypted = await encryptPassword(password);

      const body = {
        name,
        email,
        password: passwordEncrypted,
      }

      const result = await UserService.create(body);

      const token = WebToken.generate({ id: result._id });


      res.status(201).json({ result, token })
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const userFromDb = await UserService.findOne({ email });

      if (!userFromDb) return res.status(400).json({ message: 'Invalid credentials' });

      const isPasswordValid = verifyPassword(password, userFromDb.password);

      if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

      const token = WebToken.generate({ id: userFromDb._id });

      res.status(200).json({ message: token });
    } catch (error) {
      res.status(401).json(error);
    }
  }
}

module.exports = new AuthController();
