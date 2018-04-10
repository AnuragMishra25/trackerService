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

module.exports = router;