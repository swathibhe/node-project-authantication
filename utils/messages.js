function getMessage() {
  const successMessages = {
    USER_SAVED: {
      data: { message: ' Profile saved ', type: 'success', data: {} },
      status: 200,
    },
    USER_CREATED: {
      data: { message: 'Account Created Successfully', type: 'success', data: {} },
      status: 200,
    },
    FETCHED: {
      data: { message: 'Fetched', type: 'success', data: {} },
      status: 200,
    },
    USER_UPDATED: {
      data: { message: 'User Updated Successfully', type: 'success', data: {} },
      status: 200,
    },
    LOGIN: {
      data: { message: 'Login successful', type: 'success', data: {} },
      status: 200,
    },
    SESSION_VERIFIED: {
      data: { message: "Session Verified", type: "success", data: {} },
      status: 200
    },
    NOTIFICATION: {
      data: { message: 'Some data in dict or list format to be saved', data: {} },
      status: 200,
    },
    SUCCESS: {
      data: { message: 'success', data: {} },
      status: 200,
    },
  };

  const errorMessages = {
    UNKNOWN: {
      data: { message: 'Something happened, please contact customer care.', type: 'error' },
      status: 500,
    },

    CHECK_CREDENTIALS: {
      data: { message: 'Please Enter correct userId and password', type: 'error' },
      status: 500,
    },
    USER_EXISTS: {
      data: { message: 'If you\'ve already signed up with any product , you can use the same user ID and password to log into Kissurcups.', type: 'error' },
      status: 409,
    },
    USER_NOT_FOUND: {
      data: { message: 'Please sign up for a KissUrCups account', type: 'error' },
      status: 409,
    },
    AUTH_HEADER_NOT_FOUND: {
      data: { message: 'Session expired, please login to continue', type: 'error' },
      status: 401,
    },
    TOKEN_INVALID: {
      data: { message: "Token invalid.", type: "error" },
      status: 401
    },
    NO_USER: {
      status: 401,
      data: { message: "Invalid User name or password mismatch.", type: "error" }
    },
    WENT_WRONG: {
      data: { message: 'Something went wrong please fill the details again', type: 'error' },
      status: 400,
    },
    POINT_ERROR: {
      data: { message: '', type: 'error' },
      status: 400,
    },
  };
  function error(key, extraText = '', data = {}) {
    let msg;
    let keyName = key;
    if (Object.prototype.hasOwnProperty.call(errorMessages, keyName)) {
      msg = errorMessages[keyName].data.message + extraText;
    } else {
      msg = errorMessages.UNKNOWN.data.message + extraText;
      keyName = 'UNKNOWN';
    }
    const obj = Object.assign({}, JSON.parse(JSON.stringify(errorMessages[keyName])));
    obj.data.data = data;
    obj.data.message = msg;
    return obj;
  }
  function success(key, extraText = '', data = {}) {
    let msg;
    if (Object.prototype.hasOwnProperty.call(successMessages, key)) {
      msg = successMessages[key].data.message + extraText;
    } else {
      msg = successMessages.UNKNOWN.data.message + extraText;
    }
    const obj = Object.assign({}, JSON.parse(JSON.stringify(successMessages[key])));
    obj.data.data = data;
    obj.data.message = msg;
    return obj;
  }
  return {
    error,
    success,
  };
}

module.exports = getMessage();
