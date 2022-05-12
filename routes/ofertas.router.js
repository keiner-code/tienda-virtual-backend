const express = require('express');
const SupermercadoService = require('../services/ofertas.service');
const validatorHandler = require('../middlewares/validator.handler');
const {getSuperSchema} = require('../schemas/ofertas.schema');

const router = express.Router();
const service = new SupermercadoService();


router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id',
  validatorHandler(getSuperSchema, 'params'),
  async (req,res,next) =>{
    try {
      const id = req.params.id;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
});
module.exports = router;
