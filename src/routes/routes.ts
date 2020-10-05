import express from 'express'
const routes = express.Router();
const auth = require("../controllers/auth");
const user = require("../controllers/user")
const dialogs = require("../controllers/dialogs")

routes.post('/signup', auth.signup);
routes.post('/signin' , auth.signin);

routes.post('/addFriend', user.addFriend)
routes.get('/userInfo', user.userInfo)

routes.get('/dialogs', dialogs.getDialogFromUser)
module.exports = routes;