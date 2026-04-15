const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);

  return await User.create({
    username: data.username,

    password: hash,
  });
};

exports.findUserByUsername = async (username) => {
  return await User.findOne({
    username: username,
  });
};

exports.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
