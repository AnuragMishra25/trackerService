const express = require('express');

const router = express.Router();

const registeredUserService = require('../services/registered_user_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await registeredUserService.getRegisteredUserById(id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

module.exports = router;