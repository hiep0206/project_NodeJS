exports.registerValidate = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.send("Missing data");
  }

  next();
};

exports.itemValidate = (req, res, next) => {
  if (!req.body.itemName || !req.body.borrower || !req.body.borrowDate) {
    return res.send("Missing item data");
  }

  next();
};
