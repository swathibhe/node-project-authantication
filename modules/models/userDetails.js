const mongoose = require('mongoose');
const { connectedDbs } = require('../../utils/database');

const { Schema } = mongoose;

const userSchema = new Schema({
  mobile: String,
  userName: String,
  userId: String,
  password: String,
  email: String,
  alterMobile: String,
  alterEmail: String
});
const User = connectedDbs.UserDb.model('User', userSchema);
module.exports = { User };
