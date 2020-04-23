const mongoose = require('mongoose');

const connectedDbs = {};

function registerCloseEvents(conn) {
  process.on('SIGINT', () => {
    conn.close(() => {
      console.log(
        'Mongoose default connection is disconnected due to application termination',
      );
      process.exit(0);
    });
  });
}

async function connect() {
  return new Promise(async (resolve, reject) => {
    // console.log('checking db connection');
    let conn;
    try {
      if (global.isDev) {
        let connString = `mongodb://${this.url}`;
        if (this.replUrl) {
          connString = `${connString},${this.replUrl}`;
        } else {
          connString = `${connString}/${this.dbName}`;
        }
        // console.log('connString', connString);
        conn = await mongoose.createConnection(connString, this.options);
      } else {
        conn = await mongoose.createConnection(
          `mongodb://${this.url}/${this.dbName}?authSource=admin`,
          this.options,
        );
      }
    } catch (err) {
      reject(err);
    }
    // try {
    // let connString = `mongodb://${this.url}`;
    // if (this.replUrl) {
    //   connString = `${connString},${this.replUrl}`;
    // } else {
    //   connString = `${connString}/${this.dbName}`;
    // }
    // // console.log('connString', connString);
    // conn = await mongoose.createConnection(connString, this.options);
    // } catch (err) {
    //   reject(err);
    // }
    registerCloseEvents(conn);
    connectedDbs[this.name] = conn;
    // console.log(`db connected : ${this.name}`);
    resolve();
  });
}

class Database {
  constructor(configs) {
    return new Promise(async (resolve, reject) => {
      const dbs = Object.keys(configs);
      for (let i = 0; i < dbs.length; i += 1) {
        const config = configs[dbs[i]];
        try {
          // eslint-disable-next-line no-await-in-loop
          await connect.call(config);
        } catch (err) {
          reject(err);
        }
      }
      // console.log(Object.keys(connectedDbs));
      resolve('done');
    });
  }
}

module.exports = { Database, connectedDbs };
