"use strict"
const jwt = require("jsonwebtoken");
const secret = global.config.secret;

function sign(payload, options = {}) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, function (err, token) {
            if (err) {
                reject(err)
            } else {
                resolve(token);
            }
        });
    });
}

function verifyAndDecode(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                reject(err);
            } else {
                resolve(decoded)
            }
        })
    });
}

function refresh() {
    return new Promise((resolve, reject) => {

    });
}

module.exports = {
    sign,
    verifyAndDecode
}