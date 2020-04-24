const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

const { verifySession } = require('../utils/authorizeMiddleware');

router.post('/signUp', async (req, res, next) => {
  console.log('signUp');
  controllers.signUp(req.body).then((info) => {
    res.status(info.status).send(info.data);
  }).catch(next);
});

router.post('/login', async (req, res, next) => {
  console.log('login');
  controllers.login(req.body).then((info) => {
    // res.setHeader('x-access-token', info.data.data.token);
    res.status(info.status).send(info.data);
  }).catch(next);
});

router.post('/profile', verifySession, async (req, res, next) => {
  controllers
    .profile(req.body)
    .then(info => {
      res.status(info.status).send(info.data);
    })
    .catch(next);
});

router.get('/userList', verifySession , async (req, res, next) => {
  controllers.userList()
    .then((info) => {
      res.status(200).send(info);
    })
    .catch(next);
});

module.exports = router;
