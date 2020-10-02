import express from 'express'
const routes = express.Router();
const auth = require("../controllers/auth");
const user = require("../controllers/user")

routes.post('/signup', auth.signup);
routes.post('/signin' , auth.signin);

routes.post('/addFriend', user.addFriend)
module.exports = routes;