const Item = require("../models/Item");

exports.dashboard = async (req, res) => {
  try {
    const items = await Item.find({
      userId: req.userId,
    });

    res.render(
      "dashboard",

      { items },
    );
  } catch {
    res.send("Dashboard error");
  }
};

exports.addItem = async (req, res) => {
  try {
    await Item.create({
      itemName: req.body.itemName,

      borrower: req.body.borrower,

      borrowDate: req.body.borrowDate,

      type: req.body.type, 

      userId: req.userId,
    });

    res.redirect("/items");
  } catch {
    res.send("Add error");
  }
};

exports.returnItem = async (req, res) => {
  try {
    await Item.findByIdAndUpdate(
      req.params.id,

      {
        status: "Đã trả",
      },
    );

    res.redirect("/items");
  } catch {
    res.send("Update error");
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);

    res.redirect("/items");
  } catch {
    res.send("Delete error");
  }
};
