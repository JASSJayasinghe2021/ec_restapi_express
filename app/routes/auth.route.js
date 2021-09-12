const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controler')

router.post('/signin', authController.signIn);
router.post('/appsignin', authController.appsSignIn);

module.exports  = router;