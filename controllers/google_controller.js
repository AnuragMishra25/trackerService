const express = require('express');

const router = express.Router();

const googleService = require('../services/google_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await googleService.getGoogleDataById(req.params.id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

router.get('/', async (req, res, next) => {
  try {
    const result = await googleService.getGoogleData(req.query);
    return res.status(200).json({
      total: result.length,
      cp: 1,
      status: 'success',
      data: result,
    });
  } catch (err) {
    return next(err);
  }
})

module.exports = router;