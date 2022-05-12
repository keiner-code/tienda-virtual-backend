const Joi = require('joi');

const id = Joi.string().uuid();

const getSuperSchema = Joi.object({
  id: id.required(),
});
module.exports = {getSuperSchema}
