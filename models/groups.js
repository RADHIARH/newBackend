const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  img: String,
  members: Array,
  messages: Array,
});
const groups = mongoose.model("groups", ProductSchema);
module.exports = groups;
