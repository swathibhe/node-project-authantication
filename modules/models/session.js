const mongoose = require("mongoose");
const { connectedDbs } = require('../../utils/database');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
	userId: String,
	token: String,
});

const Session = connectedDbs.UserDb.model('session', sessionSchema);
module.exports = {Session}
