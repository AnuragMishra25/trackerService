const express = require('express');

const router = express.Router();

const productUserService = require('../services/product_user_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await productUserService.getProductUserById(id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

module.exports = router;