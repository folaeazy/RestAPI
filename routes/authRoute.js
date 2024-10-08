const express = require("express");
const route  = express.Router();
const { loginUser } = require("../controllers/authController");
const { createUser } = require("../controllers/authController");

route.get('/login', loginUser );
route.post('/new-user', createUser );



module.exports = route;
