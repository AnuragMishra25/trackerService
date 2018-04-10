const express = require('express');

const router = express.Router();

const directService = require('../services/direct_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await directService.getDirectById(1);
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
    const result = await directService.getDirectData(req.query);
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