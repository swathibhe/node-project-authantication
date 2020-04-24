const uuid = require('uuid/v1');
const { User, Session } = require('../../models');
const { mongooseAsync, tokenService } = require('../../utils');
const { hashData } = require('../../../utils/crypto');

async function signUp(userDetails) {
  console.log(userDetails);
  const newUserCheck = await mongooseAsync.findOneDoc(
    {
      userName: userDetails.userName,
    },
    User,
  );
  if (newUserCheck) {
    logger.info(`exisiting user ${userDetails.userName}`);
    throw new Error('USER_EXISTS');
  } else {
    logger.info(`new user ${userDetails.mobile}`);

    // saving document in db
    const saveObj = {
      mobile: userDetails.mobile,
      userName: userDetails.userName,
      userId: uuid(),
      password: await hashData(userDetails.password),
      email: userDetails.email,
      alterMobile: userDetails.alterMobile,
      alterEmail: userDetails.alterEmail
    };

    console.log('saveObj', saveObj);
    await mongooseAsync.saveDoc(new User(saveObj));
    const query = { userId: saveObj.userId }
    const token = await tokenService.sign(query);
    const findSession = await mongooseAsync.findOneDoc(
      {
        userId: saveObj.userId
      },
      Session,
    );
    if (!findSession) {
      console.log('findSession', findSession);
      const sessionDoc = {
        userId: saveObj.userId,
        token: token
      }
      await mongooseAsync.saveDoc(
        new Session(sessionDoc)
      );
    }
    return Promise.resolve(global.messages.success('USER_CREATED', '', {}));
  }
}
module.exports = { signUp };