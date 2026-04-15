const Item = require("../models/Item");

exports.getItemsByUser = async (userId) => {
  return await Item.find({
    userId: userId,
  }).sort({ borrowDate: -1 });
};

exports.createItem = async (data) => {
  return await Item.create(data);
};

exports.returnItem = async (id) => {
  return await Item.findByIdAndUpdate(
    id,

    { status: "Đã trả" },
  );
};

exports.deleteItem = async (id) => {
  return await Item.findByIdAndDelete(id);
};
