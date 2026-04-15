const bcrypt = require("bcrypt");

const User = require("../models/User");

const jwtHelper = require("../helpers/jwt");

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.registerPage = (req, res) => {
  res.render("register");
};

exports.register = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    await User.create({
      username: req.body.username,

      password: hash,
    });

    res.redirect("/");
  } catch {
    res.send("Register error");
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.send("User not found");
    }

    const match = await bcrypt.compare(
      req.body.password,

      user.password,
    );

    if (!match) {
      return res.send("Wrong password");
    }

    const token = jwtHelper.createToken(user);

    res.cookie("token", token);

    res.redirect("/items");
  } catch {
    res.send("Login error");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token");

  res.redirect("/");
};
