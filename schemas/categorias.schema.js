const Joi = require('joi');

const id = Joi.string().uuid();

const getCategoriasSchema = Joi.object({
  id: id.required(),
});
module.exports = {getCategoriasSchema}
