const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  device_id: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  customer:{
    type: Schema.Types.ObjectId,
    ref: 'customers',
},
  date: {
      type: Date,
      default: Date.now
  },
});

module.exports = User = mongoose.model("users", UserSchema);
