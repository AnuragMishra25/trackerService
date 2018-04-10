const express = require('express');

const router = express.Router();

const emailService = require('../services/email_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await emailService.getEmailDataById(id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

module.exports = router;