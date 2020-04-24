"use strict";

const cryptoService = require('./crypto');
module.exports = function (userDoc, password) {
	console.log("enteredPassword: ", cryptoService.hashData(password));
	console.log("user passsword : ", userDoc.password);
	if (userDoc.password === cryptoService.hashData(password)) {
		return "match";
	} else {
		throw new Error("NO_USER");
	}
};
