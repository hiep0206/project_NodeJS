const jwt = require("jsonwebtoken");

exports.createToken = (user) => {
  return jwt.sign(
    { id: user._id },

    process.env.JWT_SECRET,

    { expiresIn: "1d" },
  );
};

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;

    next();
  } catch {
    res.redirect("/");
  }
};
