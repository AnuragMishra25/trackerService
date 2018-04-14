const express = require('express');

const router = express.Router();
const path = require('path');

router.use('/visitorHistory', require('./visitor_history_controller'));
router.use('/registeredUser', require('./registered_user_controller'));
router.use('/productUser', require('./product_user_controller'));
router.use('/organic', require('./organic_controller'));
router.use('/direct', require('./direct_controller'));
router.use('/facebook', require('./facebook_controller'));
router.use('/google', require('./google_controller'));
router.use('/email', require('./email_controller'));
router.use('/domain', require('./domain_controller'));

module.exports = router;
