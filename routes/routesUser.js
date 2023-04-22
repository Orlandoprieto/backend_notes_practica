const express = require('express');
const routesUser = express.Router();

//controllers
const registerUser = require('../controllers/registerUser')
const loginUser = require('../controllers/loginUser');

//routes
routesUser.post('/register', registerUser);
routesUser.post('/login', loginUser);



module.exports = routesUser