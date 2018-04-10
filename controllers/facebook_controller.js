const express = require('express');

const router = express.Router();

const facebookService = require('../services/facebook_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await facebookService.getFacebookDataById(id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

module.exports = router;