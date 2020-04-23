const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const app = express();
// cors
function initApp() {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, x-access-token',
    );
    res.header(
      'Access-Control-Expose-Headers',
      'Content-Disposition, x-access-token',
    );
    if (req.method === 'OPTIONS') {
      //  respond with 200
      res.sendStatus(200);
    } else {
      next();
    }
  });

  app.use(logger('dev'));
  app.use(express.json({ limit: '5MB' }));
  app.use(express.urlencoded({ extended: true }));
  app.set('trust proxy', '0.0.0.0');

  const accountRouter = require('./modules/account/routes');

  app.use('/*', (req, res, next) => {
    // console.log(req.originalUrl);
    // req.featureRequest = getPermissionKey(req.originalUrl);
    next();
  });

  app.use('/account', accountRouter);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    console.log(err);
    if (
      typeof err === 'object' &&
      Object.prototype.hasOwnProperty.call(err, 'action') &&
      err.action === 'processed'
    ) {
      // eslint-disable-next-line no-param-reassign
      delete err.action;
      const { status } = err;
      // eslint-disable-next-line no-param-reassign
      delete err.status;
      res.status(status).send(err);
      // eslint-disable-next-line no-constant-condition
    } else {
      const httpError = global.messages.error(
        err.message,
        err.extraData,
        err.data,
      );
      console.log(httpError);
      res.status(httpError.status || 500).send(httpError.data);
    }
  });
}

module.exports = { app, initApp };
