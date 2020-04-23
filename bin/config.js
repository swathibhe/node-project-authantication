const appName = 'Node-project';

const config = {
  local: {
    server: {
      port: 3025,
      hostname: '0.0.0.0',
    },
    app: {
      appName,
    },
  },
  dev: {
    server: {
      port: 3025,
      hostname: '0.0.0.0',
    },
    app: {
      appName,
    },
  },
  prod: {
    server: {
      port: 3025,
      hostname: '0.0.0.0',
    },
    app: {
      appName,
    },
  },
  stage: {
    server: {
      port: 3025,
      hostname: '0.0.0.0',
    },
    app: {
      appName,
    },
  },
  beta: {
    server: {
      port: 3025,
      hostname: '0.0.0.0',
    },
    app: {
      appName,
    },
  },
  betav2: {
    server: {
      port: 3025,
      hostname: '0.0.0.0',
    },
    app: {
      appName,
    },
  },
};

function getConfig(env) {
  return config[env];
}

module.exports = getConfig;
