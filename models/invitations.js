const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id_sender: Number,
  id_receiver: Number,
  accepted: Boolean,
  request_message: { type: String, default: null },
});
const invitations = mongoose.model("invitations", ProductSchema);
module.exports = invitations;
