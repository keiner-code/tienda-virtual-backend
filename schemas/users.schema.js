const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().max(14).min(4);
const lastname = Joi.string().max(15).min(2);
const email = Joi.string().min(10).max(20);
const cedula = Joi.number().integer(12);
const password = Joi.string().min(8).max(20);

const createUsersSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  email: email.required(),
  password: password.required(),
  cedula: cedula.required()
});
const updateUsersSchema = Joi.object({
  name,
  lastname,
  email,
  password
});
const getUsersSchema = Joi.object({
  id: id.required()
});
module.exports = {createUsersSchema,updateUsersSchema,getUsersSchema}
