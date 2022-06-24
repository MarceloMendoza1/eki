const express = require("express");
const userRouter = express.Router();

const User = require("../models/User");
const passport = require("passport");
const s = require("sequelize");

//Register
userRouter.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
});

//LogIn
userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

//LogOut
userRouter.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});



module.exports = userRouter;
