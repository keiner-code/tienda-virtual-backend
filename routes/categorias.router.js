const express = require('express');
const CategoriasService = require('../services/categorias.service');
const validatorHandler = require('../middlewares/validator.handler');
const {getCategoriasSchema} = require('../schemas/categorias.schema');

const router = express.Router();
const service = new CategoriasService();


router.get('/', async (req, res) => {
  const categorias = await service.find();
  res.json(categorias);
});
router.get('/:id',
  validatorHandler(getCategoriasSchema, 'params'),
  async (req,res,next) =>{
    try {
      const id = req.params.id;
      const categorias = await service.findOne(id);
      res.json(categorias);
    } catch (error) {
      next(error);
    }
});
module.exports = router;

