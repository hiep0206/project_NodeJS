const validate = require("../helpers/validate");
const express = require("express");

const router = express.Router();

const auth = require("../controllers/authController");

router.get("/", auth.loginPage);

router.get("/register", auth.registerPage);

router.post("/register", validate.registerValidate, auth.register);

router.post("/login", auth.login);

router.get("/logout", auth.logout);

module.exports = router;
