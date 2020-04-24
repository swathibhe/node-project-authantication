const { User } = require('../../models');
const { mongooseAsync } = require('../../utils');

async function profile(payload) {
    try {
        console.log(payload);
        let userDoc = await mongooseAsync.findOneDoc(
            {
                userName: payload.userName,
            },
            User,
        );
        if (userDoc) {
            let saveObj = {
                userName: payload.userName,
                mobile: payload.mobile,
                email: payload.email,
                alterMobile: payload.alterMobile,
                alterEmail: payload.alterEmail
            };
            console.log("saveObj", saveObj);
            const updateDb = await mongooseAsync.updateOne(
                User,
                { userId: userDoc.userId },
                { $set: saveObj }
            );
            console.log('updateDb', updateDb);
            return Promise.resolve(global.messages.success('USER_UPDATED', '', {}));
        } else {
            throw new Error("WENT_WRONG");
        }
    } catch (err) {
        logger.error(err.stack);
        return Promise.reject(err);
    }
}

module.exports = { profile };
