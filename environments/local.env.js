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
      name: 'UserDb',
      user: '',
      password: '',
      url: '127.0.0.1:27017', // mongodb+srv://admin:<password>@localdb-eemjv.mongodb.net/test
      dbName: 'UserDb',
      options: mongooseOptions, // 127.0.0.1:27017
    },
  },
};

module.exports = function getConfig(serviceName) {
  return services[serviceName];
};
