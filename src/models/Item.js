const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: String,

  borrower: String,

  borrowDate: Date,

  status: {
    type: String,
    default: "Chưa trả",
  },

  type: {
    type: String,
    default: "other",
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,

    ref: "User",
  },
});

module.exports = mongoose.model("Item", itemSchema);
