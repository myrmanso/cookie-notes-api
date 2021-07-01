const express = require('express');
const authController = require('../../controller/auth.controller');
const authMiddleware = require('../../middlewares/auth.middleware');

const router = express();

router.post('/signup', authMiddleware.signup, authController.signup);
router.post('/login', authMiddleware.login, authController.login);

module.exports = router;
