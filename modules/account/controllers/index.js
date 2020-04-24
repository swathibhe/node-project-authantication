const { login } = require('./login');
const { signUp } = require('./signup');
const { profile } = require('./profile');
const { userList } = require('./userList');

// const { userDetails } = require('./profile');

module.exports = { signUp, login, profile, userList }