import express from 'express'
const routes = express.Router();
const auth = require("../controllers/auth");

routes.post("/signup", auth.signup);
routes.post("/signin", auth.signin)
module.exports = routes;