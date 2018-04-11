const express = require('express');

const router = express.Router();

const visitorHistoryService = require('../services/visitor_history_service');

router.get('/:id',
  async (req, res, next) => {
    try {
      const result = await visitorHistoryService.getVisitorHistoryById(id);
      return res.status(200).json({
        data: result,
      });
    } catch (err) {
      return next(err);
    }
  },
);

router.post('/', async(req, res, next) =>{
  try {
    const result = await visitorHistoryService.createVisitorHistory(req.body.data);
    return res.status(201).json({
      id: result,
    });
  } catch (err) {
    return next(err);
  }
})

module.exports = router;