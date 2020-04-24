"use strict";

const { User } = require('../../models');
const { mongooseAsync } = require('../../utils');

async function userList() {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = await mongooseAsync.fetchDoc({}, User, {_id: 0,password: 0});
            console.log("allCuisines",userData);
            resolve(global.messages.success('FETCHED', '', userData));
        } catch (error) {
            console.log('Error 1: ', error);
            reject(error);
        }
    });
}

module.exports = { userList };