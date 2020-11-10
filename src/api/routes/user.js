const express= require("express");
const router = express.Router();
const checkAuth = require('../middleware/checkAuth')

const signup = require('../handlers/auth');
const login = require('../handlers/auth')
const getUser = require('../handlers/auth')

//signup
router.post('/signup', signup.signupFunction)

//login
router.post('/login',login.loginFunction)

//get the user
router.get('/getuser',checkAuth,getUser.getUserFunction)

module.exports = router



