const express = require('express');
const routerApi = require('./routes');
const {logErrors,errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

/* app.get('/',(req,res) =>{
  res.json({
    message: 'inicio'
  })
}) */


app.listen(port, () =>{
  console.log('Mi Port'+ port);
});



