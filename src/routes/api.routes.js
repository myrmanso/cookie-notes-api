const express = require('express');
const authRouter = require('./auth/auth.routes');
const userRouter = require('./user/user.routes');
const recipesRouter = require('./recipes/recipes.routes');

const authRoutesMiddleware = require('../middlewares/authRoutes.middleware');

const router = express();

router.use('/auth', authRouter);

router.use(authRoutesMiddleware.protect);

router.use('/user', userRouter);
router.use('/', recipesRouter);

module.exports = router;
