const {
    serviceCaller,
    serviceOptions,
    asyncMongoose,
    mongoClient,
  } = require('../../utils');
  const { UserModel } = require('../../models');
  const { createSignupDocs } = require('../utils');
  
  async function signup(payload) {
    // -------------------  1. Check user is registered or not
    const userDoc = await asyncMongoose.findOneDoc(
      {
        $or: [{ mobile: payload.mobile }, { email: payload.email }],
      },
      UserModel,
      { userId: 1 },
    );
    if (userDoc) {
      throw new Error('EMAIL_MOBILE_INUSE');
    }
  
    // -------------------- 2. verify otp
    const verifyOtpOptions = serviceOptions('messaging', 'verifyOtp', {
      mobile: payload.countryCode + payload.mobile,
      otp: payload.otp,
    });
    if (!global.isDev) {
      await serviceCaller(verifyOtpOptions);
    }
    // --------------------3. init Signup
    const initSignupOptions = serviceOptions('auth', 'initiateSignup', {
      ...payload,
      userId: payload.mobile,
      app: global.config.appName,
    });
    const initData = await serviceCaller(initSignupOptions);
  
    const { mobile, email, deviceId, name } = payload;
    const { userId, registered, setPassword } = initData.data;
  
    // --------------------3. complete Signup
  
    const completeSignUpOptions = serviceOptions('auth', 'signup', {
      registered,
      setPassword,
      userId,
      password: '',
      mobile,
      email,
      deviceId,
      status: 'active',
      info: {},
      app: global.config.appName,
    });
    const signupInfo = await serviceCaller(completeSignUpOptions);
    // console.log(signupInfo);
  
    //  create local app data
    const newUserDoc = createSignupDocs(payload, userId);
  
    const saveInfo = await asyncMongoose.saveDoc(newUserDoc);
  
    // console.log(saveInfo);
    signupInfo.message = 'Sign up complete.';
    return Promise.resolve(signupInfo);
  }
  
  async function validate(payload) {
    // console.log(payload);
    const userDoc = await asyncMongoose.findOneDoc(
      {
        $or: [{ mobile: payload.mobile }, { email: payload.email }],
      },
      UserModel,
      { userId: 1 },
    );
    if (userDoc) {
      throw new Error('EMAIL_MOBILE_INUSE');
    }
    return Promise.resolve({ message: 'success', type: 'success', data: {} });
  }
  
  module.exports = { signup, validate };
  