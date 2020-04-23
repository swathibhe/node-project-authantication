const express = require('express');

const router = express.Router();
// const controllers = require('./controllers');
const { verifySession } = require('');


router.post('/login', async (req, res, next) => {
  controllers
    .login(req.body, res)
    .then(info => {
      res.header('x-access-token', info.token);
      // eslint-disable-next-line no-param-reassign
      // delete info.token;
      res.status(200).send(info);
    })
    .catch(next);
});

router.post('/logout', verifySession, (req, res, next) => {
  controllers
    .logout(req.sessionInfo)
    .then(info => {
      res.status(info.status).send(info.data);
    })
    .catch(next);
});

router.post('/signup', async (req, res, next) => {
  controllers
    .signup(req.body)
    .then(info => {
      res.header('x-access-token', info.data.token);
      // eslint-disable-next-line no-param-reassign
      // delete info.data.token;
      res.status(200).send(info);
    })
    .catch(next);
});

router.get('/accountData', verifySession, async (req, res, next) => {
  controllers
    .accountData(req.sessionInfo.userId)
    .then(info => {
      res.status(200).send(info);
    })
    .catch(next);
});

router.post('/validate', async (req, res, next) => {
  controllers
    .validate(req.body)
    .then(info => {
      // eslint-disable-next-line no-param-reassign
      // delete info.data.token;
      res.status(200).send(info);
    })
    .catch(next);
});

router.post('/createTicket', verifySession, async (req, res, next) => {
  controllers
    .createTicket(req.body, req.sessionInfo.userId)
    .then(info => {
      // eslint-disable-next-line no-param-reassign
      // delete info.data.token;
      res.status(info.status).send(info.data);
    })
    .catch(next);
});

router.get('/guestCountCuisines', async (req, res, next) => {
  controllers
    .guestCountCuisines()
    .then(info => {
      res.status(200).send(info);
    })
    .catch(next);
});

router.get('/faqsAndTermsAndConditions', async (req, res, next) => {
  controllers
    .faqsAndTermsAndConditions()
    .then(info => {
      res.status(200).send(info);
    })
    .catch(next);
});
module.exports = router;
