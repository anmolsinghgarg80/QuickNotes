const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required : [true,'Name is required!'],
  },
  email: {
    type: String,
    required : [true,'Email is required!'],
  },
  password: {
    type: String,
    required : [true,'Password must be Provided!'],
  },
  createdOn: {
    type: Date,
    default: new Date().getTime()
  }
});

module.exports = mongoose.model("User", userSchema);