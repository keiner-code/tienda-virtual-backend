const usersRouter = require('./users.router');
const ofertasRouter = require('./ofertas.router');
const categoriasRouter = require('./categorias.router');
const express = require('express');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/solo-hoy-ofertas', ofertasRouter);
  router.use('/users',usersRouter);
  router.use('/categorias',categoriasRouter);
}
module.exports = routerApi;
