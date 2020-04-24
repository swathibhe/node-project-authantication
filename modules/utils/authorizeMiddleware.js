const { verifyAndDecode } = require("../utils/tokenService");
const { Session } = require('../models');

async function checkToken(token) {
  if (token) {
    try {
      let info = await verifyAndDecode(token);
      console.log('token data', info);
      let sessionDoc = await Session.findOne(
        {
          userId: info.userId,
        },
        { userId: 1, token: 1 }
      );
      console.log('sessionDoc',sessionDoc);
      if (!sessionDoc) {
        return Promise.reject({ message: "TOKEN_INVALID" });
      } else {
        return Promise.resolve(
          global.messages.success("SESSION_VERIFIED", "", {
            userId: sessionDoc.userId,
            token : sessionDoc.token
          })
        );
      }
    } catch (err) {
      console.log(err);
      if (errorTypes.hasOwnProperty(err.message)) {
        return Promise.reject({ message: errorTypes[err.message] });
      } else {
        return Promise.reject("UNKNOWN");
      }
    }
  }
}

async function verifySession(req, res, next) {
  try {
    const token = req.headers['x-access-token'];
    console.log("token",token);
    const info = await checkToken(token);
    console.log('info',info);
    req.sessionInfo = info.data;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}
async function checkIntToken(token) {
  if (token) {
    if (token === '59a8b03c-5796-11ea-8e2d-0242ac130003') {
      return Promise.resolve({});
    }
    throw new Error('AUTH_HEADER_NOT_VALID');
  }
  throw new Error('AUTH_HEADER_NOT_FOUND');
}

async function verifyIntSession(req, res, next) {
  try {
    const token = req.headers['x-access-token-int'];
    const info = await checkIntToken(token);
    req.sessionInfo = info;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  verifySession,
  checkToken,
  verifyIntSession,
};
