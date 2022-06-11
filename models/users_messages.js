const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  message: String,
  id_sender: mongoose.Schema.Types.ObjectId,
  id_receiver: mongoose.Schema.Types.ObjectId,
  vue: {
    type: Boolean,
    default: false,
  },
});
const users_messages = mongoose.model("users_messages", ProductSchema);
module.exports = users_messages;
