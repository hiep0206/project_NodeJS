const validate = require("../helpers/validate");
const express = require("express");

const router = express.Router();

const item = require("../controllers/itemController");

const jwt = require("../helpers/jwt");

router.get("/", jwt.verifyToken, item.dashboard);

router.post("/add", jwt.verifyToken, validate.itemValidate, item.addItem);

router.get("/return/:id", jwt.verifyToken, item.returnItem);

router.get("/delete/:id", jwt.verifyToken, item.deleteItem);

module.exports = router;
