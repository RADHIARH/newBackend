const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  actif: Boolean,
  img: String,
  phone: Number,
  invitations: Array,
  friendsList: Array,
  messages: Array,
  token: String,
});
// const bcrypt = require("bcryptjs");
// UserSchema.pre("save", function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   });
// });

const bcrypt = require("bcryptjs");
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

const users = mongoose.model("users", UserSchema);
module.exports = users;
