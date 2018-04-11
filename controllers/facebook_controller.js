const express = require('express');

const router = express.Router();

const facebookService = require('../services/facebook_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await facebookService.getFacebookDataById(req.params.id);
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
    const result = await facebookService.getFacebookData(req.query);
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