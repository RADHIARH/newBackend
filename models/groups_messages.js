const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  message: String,
  id_sender: mongoose.Schema.Types.ObjectId,
  id_group: mongoose.Schema.Types.ObjectId,
});
const groups_messages = mongoose.model("groups_messages", ProductSchema);
module.exports = groups_messages;
