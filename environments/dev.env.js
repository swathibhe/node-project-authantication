// const mongooseOptions = {
//   useNewUrlParser: true,
//   reconnectTries: 30,
//   autoReconnect: true,
//   useFindAndModify: false,
//   reconnectInterval: 500,
//   poolSize: 100,
//   keepAlive: true,
//   connectTimeoutMS: 30000,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };

// const services = {
//   databases: {
//     yumzy_review_panel: {
//       name: 'yumzy_review_panel',
//       user: 'admin',
//       password: 'admin123',
//       url: 'mongoadmin:L6ebvCyjM4S6Jndm@159.89.164.240:27017',
//       dbName: 'yumzy_review_panel',
//       options: mongooseOptions,
//     },
//     restaurant_panel: {
//       name: 'restaurant_panel',
//       user: 'admin',
//       password: 'admin123',
//       url: 'mongoadmin:L6ebvCyjM4S6Jndm@159.89.164.240:27017',
//       dbName: 'restaurant_panel',
//       options: mongooseOptions,
//     },
//     suggestions_app: {
//       name: 'suggestions_app',
//       user: 'admin',
//       password: 'admin123',
//       url: 'mongoadmin:L6ebvCyjM4S6Jndm@142.93.223.106:27017',
//       // url: 'mongoadmin:L6ebvCyjM4S6Jndm@68.183.81.231:27017',
//       dbName: 'suggestions_app',
//       options: mongooseOptions,
//     },
//     ordering: {
//       name: 'ordering',
//       user: 'admin',
//       password: 'admin123',
//       url: 'mongoadmin:L6ebvCyjM4S6Jndm@159.89.164.240:27017',
//       // url: 'mongoadmin:L6ebvCyjM4S6Jndm@68.183.81.231:27017',
//       dbName: 'ordering',
//       options: mongooseOptions,
//     },
//   },
//   auth: {
//     // url: 'http://127.0.0.1:5000',
//     url: 'http://139.59.92.1:5000',
//     login: { path: '/otpLogin', method: 'post' },
//     signup: { path: '/signup', method: 'post' },
//     verifySession: { path: '/authorize/verifySession', method: 'post' },
//     sessionInfo: '/views/sessionInfo',
//     getSession: { path: '/views/session', method: 'post' },
//     initiateSignup: { path: '/initiateSignup', method: 'post' },
//   },
//   elasticSearch: {
//     url: 'http://139.59.77.43:3089',
//     processOutlet: { path: '/indexing/yumzy/outlets', method: 'post' },
//     processItems: { path: '/indexing/yumzy/items', method: 'post' },
//   },
//   messaging: {
//     url: 'http://139.59.77.43:4000',
//     sendOtp: { path: '/sms/sendotp', method: 'post' },
//     verifyOtp: { path: '/sms/verifyotp', method: 'post' },
//     resendOtp: { path: '/sms/resendotp', method: 'post' },
//     sendMessage: { path: '/sms/sendMessage', method: 'post' },
//   },
//   spaces: {
//     url: 'http://139.59.77.43:3015',
//     uploadOne: { path: '/spaces/uploadOne', method: 'post' },
//     uploadMany: '/spaces/uploadMultiple',
//     createPreSignedGetUrl: { path: '/spaces/getObj', method: 'post' },
//     createPreSignedPutUrl: { path: '/spaces/putObj', method: 'post' },
//     zipUploadDir: 'menu_item_images_zip',
//     outletItemImageBaseFolder: 'outlet_images',
//     outletItemImageOriginalFolder: 'item_original',
//     outletItemImageResizeFolder: 'item_resize',
//     outletSoundsFolder: 'outlet_sounds',
//     salesRestaurantFolder: 'sales_restaurant_details',
//     acl: 'public-read',
//     imageWidth: 800,
//     imageHeight: 600,
//   },
//   mailService: {
//     url: 'https://dev02.laalsa.com',
//     sendMail: { path: '/lba/misc/sendMail/', method: 'post' },
//   },
//   alter: {
//     url: 'http://139.59.77.43:3011',
//     alterImage: { path: '/alterImage/alterB64_B64', method: 'post' },
//   },
//   delivery: {
//     url: 'http://10.9.50.224:3012/delivery/appdata',
//     updateOperational: { path: '/updateOperational', method: 'post' },
//     getAllRecord: { path: '/getAllDeliveryDetails', method: 'get' },
//     fetchRecord: { path: '/fetchOneRecord', method: 'get' },
//   },
//   restaurant_panel: {
//     url: 'http://10.9.50.224:3001/menu',
//     replicateOutletData: { path: '/replicateMenuItems', method: 'post' },
//   },
// };

// module.exports = function getConfig(serviceName) {
//   return services[serviceName];
// };



const mongooseOptions = {
    useNewUrlParser: true,
    reconnectTries: 30,
    autoReconnect: true,
    useFindAndModify: false,
    reconnectInterval: 500,
    poolSize: 100,
    keepAlive: true,
    connectTimeoutMS: 10000,
    useCreateIndex: true,
  };
  
  const services = {
    databases: {
      local: {
        name: 'localDb',
        user: '',
        password: '',
        url: '127.0.0.1:27017', // mongodb+srv://admin:<password>@localdb-eemjv.mongodb.net/test
        dbName: 'localDb',
        options: mongooseOptions, // 127.0.0.1:27017
      },
      restaurant: {
        name: 'restaurant',
        user: '',
        password: '',
        url: '127.0.0.1:27017', // mongodb+srv://admin:<password>@localdb-eemjv.mongodb.net/test
        dbName: 'restaurant',
        options: mongooseOptions, // 127.0.0.1:27017
      },
    },
  };
  
  module.exports = function getConfig(serviceName) {
    return services[serviceName];
  };
  
  