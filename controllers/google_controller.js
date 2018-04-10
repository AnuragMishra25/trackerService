const express = require('express');

const router = express.Router();

const googleService = require('../services/google_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await googleService.getGoogleDataById(id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

module.exports = router;