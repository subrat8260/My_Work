const express = require("express");
const UserRouter = express.Router();
const userController = require("../controller/userController");
UserRouter.get("/", userController.HomePage);
UserRouter.post("/login", userController.LoginPage);
UserRouter.post("/signup", userController.SignupPage);
module.exports = UserRouter;
