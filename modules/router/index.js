const express = require('express');

const router = express.Router();

const accountRoutes = require('../account/routes');

router.use('/account', accountRoutes);

module.exports = router;
