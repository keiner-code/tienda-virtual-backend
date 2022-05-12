const express = require('express');
const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createUsersSchema,updateUsersSchema,getUsersSchema} = require('../schemas/users.schema');

const router = express.Router();
const service = new UsersService();


router.get('/', async (req, res) => {
  const user = await service.find();
  res.json(user);
});
router.get('/:id',
  validatorHandler(getUsersSchema, 'params'),
  async (req,res,next) =>{
    try {
      const id = req.params.id;
      const user = await service.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
});
router.post('/',
    validatorHandler(createUsersSchema,'body'),
    async (req,res)=>{
      const body = req.body;
      const newUsers = await service.create(body)
      res.json(newUsers);
});
router.patch('/:id',
    validatorHandler(getUsersSchema,'params'),
    validatorHandler(updateUsersSchema,'body') ,
    async (req,res) =>{
      const {id} = req.params;
      const body = req.body;
      const changes = await service.update(id,body);
      res.json(changes);
});
router.delete('/:id',async (req,res)=>{
  const {id} = req.params;
  const dlt = await service.delete(id);
  res.json(dlt);
});

module.exports = router;

