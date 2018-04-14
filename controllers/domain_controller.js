const express = require('express');

const router = express.Router();

const domainService = require('../services/domain_service');

router.get('/:id',
    async (req, res, next) => {
        try {
            const result = await domainService.getDomainById(req.params.id);
            return res.status(200).json({
                data: result,
            });
        } catch (err) {
            return next(err);
        }
    },
);

router.get('/user', async (req, res, next) => {
    try {
        const result = await domainService.getDomainByUser(req.query);
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

router.post('/', async(req, res, next) =>{
    try {
      const result = await domainService.createDomainEntry(req.body.data);
      return res.status(201).json({
        id: result,
      });
    } catch (err) {
      return next(err);
    }
  })

module.exports = router;