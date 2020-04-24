const AppName = 'node-project';

const config = {
  local: {
    AppName,
    server: {
      port: 3026,
      hostname: '0.0.0.0',
    },
    app: {
      secret : "n8vaRgP5VksWvNbgzDzzj6D5XFcRH3Tr"
    },
  },
};

function getConfig(env) {
  return config[env];
}

module.exports = getConfig;
