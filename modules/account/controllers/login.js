"use strict";

const { User, Session } = require('../../models');
const { mongooseAsync, tokenService } = require('../../utils');
const { checkPassword } = require("../../../utils");

async function login(payload) {
    try {
        let tokenOptions = {}, token;
        console.log(payload);
        let userDoc = await mongooseAsync.findOneDoc(
            {
                userName: payload.userName,
            },
            User,
        );
        if (userDoc) {
            checkPassword(userDoc, payload.password);
            const findSession = await mongooseAsync.findOneDoc(
                {
                    userId: userDoc.userId
                },
                Session,
            );
            const query = { userId: userDoc.userId }
            const token = await tokenService.sign(query);
            if (findSession) {
                console.log('findSession', findSession);
                const updateDb = await mongooseAsync.updateOne(
                    Session,
                    { userId: userDoc.userId },
                    { $set: { token: token } }
                );
                console.log('updateDb', updateDb);
            }
            const data = { token: token, userId: userDoc.userId };
            return Promise.resolve(global.messages.success('LOGIN', '', data));
        } else {
            throw new Error("NO_USER");
        }
    } catch (err) {
        logger.error(err.stack);
        return Promise.reject(err);
    }
}

module.exports = { login };
