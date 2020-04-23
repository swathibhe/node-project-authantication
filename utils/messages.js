function getMessage() {
    const successMessages = {
        CREATED: {
            data: {
                message: 'Promotion created successfully',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        SINGLE_OFFER: {
            data: {
                message:
                    'Found one offer with given timings, New offer will be created with Existing Offer Percentage',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        DOUBLE_OFFER: {
            data: {
                message:
                    'Found two offers with given timings, New offer will be created with higher Existing Offer Percentage',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        MULTIPLE_OFFER: {
            data: {
                message:
                    'Found multiple offer with given timings, New offer will be created with higher Existing Offer Percentage',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        NO_OFFER: {
            data: {
                message: 'No offer found with given timings',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        OTP_SENT: {
            data: {
                message: 'OTP has been successfully sent to ',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        FETCHED: {
            data: { message: 'Fetched', type: 'success', data: {} },
            status: 200,
        },
        DELETED: {
            data: { message: 'Deleted successfully', type: 'success', data: {} },
            status: 200,
        },
        LOGGED_OUT: {
            data: { message: 'Logged out.', type: 'error', data: {} },
            status: 200,
        },
        NO_DATA: {
            data: { message: 'No data found', type: 'success', data: {} },
            status: 200,
        },
        AUDIT_UPDATE: {
            data: {
                message: 'Audit Status has been updated.',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        DATA_UPDATED: {
            data: { message: 'Details has been updated.', type: 'success', data: {} },
            status: 200,
        },
        COUPON_CREATED: {
            data: { message: 'Coupon created.', type: 'success', data: {} },
            status: 200,
        },
        COMMISSION_PLAN_UPDATE: {
            data: { message: 'Commission plan updated.', type: 'success', data: {} },
            status: 200,
        },
        COMMISSION_PLAN_FETCH: {
            data: { message: 'Commission plan Fetched.', type: 'success', data: {} },
            status: 200,
        },
        REST_SEARCH: {
            data: {
                message: 'Restaurant Search successfully',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        REST_FETCHED: {
            data: {
                message: 'Restaurant Details Fetched successfully',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        RESTART: {
            data: {
                message: 'Service Restarted successfully',
                type: 'success',
                data: {},
            },
            status: 200,
        },
        REPLICATED: {
            data: {
                message: 'Data Replicated successfully',
                type: 'success',
                data: {},
            },
            status: 200,
        },
    };

    const errorMessages = {
        UNKNOWN: {
            data: {
                message:
                    'Something happened, please contact customer care at 040-68192221.',
                type: 'error',
            },
            status: 500,
        },
        VALIDATION_ERROR: {
            data: {
                message:
                    'Something happened, please contact customer care at 040-68192221.',
                type: 'error',
            },
            status: 500,
        },
        'Not Found': {
            data: { message: 'Endpoint not found.', type: 'error' },
            status: 404,
        },
        USER_ACCOUNT_CREATION_FAILED: {
            data: { message: 'User account creation failed.', type: 'error' },
            status: 400,
        },
        NOT_UPDATED: {
            data: { message: 'All details were not updated.', type: 'error' },
            status: 400,
        },
        ALREADY_AGR_SENT: {
            data: { message: 'Already sent to agreement team.', type: 'error' },
            status: 400,
        },
        OPERATION_OVERLAP: {
            data: { message: 'Operational timings are overlapping', type: 'error' },
            status: 400,
        },
        USER_ID_IN_USE: {
            data: {
                message: 'User id already in use.',
                type: 'error',
                code: 'user_exist',
            },
            status: 200,
        },

        AUTH_HEADER_NOT_FOUND: {
            data: { message: 'Auth header not found.', type: 'error' },
            status: 403,
        },
        AUTH_HEADER_NOT_VALID: {
            data: { message: 'Auth header passes is not Valid.', type: 'error' },
            status: 403,
        },
        EMAIL_MOBILE_INUSE: {
            data: {
                message:
                    'Email or Mobile number already in use.  Please try to sign-in.',
                type: 'error',
            },
            status: 500,
        },
        NO_USER: {
            data: {
                message: 'User is not registered. please do Signup',
                type: 'error',
            },
            status: 500,
        },
        ACCOUNT_INACTIVE: {
            data: {
                message:
                    'Account inactive. Please contact customer care at 040-68192221',
                type: 'error',
            },
            status: 500,
        },
        NOT_LOGGED_IN: {
            data: { message: 'Session Invalid.', type: 'error', action: 'logout' },
            status: 403,
        },
        ACCESS_DENIED: {
            data: { message: 'Access denied.', type: 'error', action: '' },
            status: 403,
        },
        NO_DATA_FOUND: {
            data: {
                message: 'No data found for given details.',
                type: 'error',
                action: '',
            },
            status: 400,
        },
        CODE_INVALID: {
            data: {
                message: 'Invalid code for selected type.',
                type: 'error',
                action: '',
            },
            status: 400,
        },
        DOC_TYPE_INVALID: {
            data: {
                message: 'Invalid Document Type for selected.',
                type: 'error',
                action: '',
            },
            status: 400,
        },
        INVALID_INPUT: {
            data: { message: 'Input invalid.', type: 'error', action: '' },
            status: 400,
        },
        REST_EXITS: {
            data: {
                message: 'Restaurant is already Exists',
                type: 'error',
                action: '',
            },
            status: 400,
        },
        SOURCE_OUTLET_NOT_FOUND: {
            data: {
                message: 'Source Outlet Id not found',
                type: 'error',
                action: '',
            },
            status: 400,
        },
        OUTLET_DATA_FOUND: {
            data: {
                message: 'Target Data is found',
                type: 'error',
                action: '',
            },
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
        const obj = Object.assign(
            {},
            JSON.parse(JSON.stringify(errorMessages[keyName])),
        );
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
        const obj = Object.assign(
            {},
            JSON.parse(JSON.stringify(successMessages[key])),
        );
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
