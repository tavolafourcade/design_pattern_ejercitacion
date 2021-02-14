var express = require('express');
var app = express();

//Requiriendo las rutas
let routes = require('./routes/main');
app.use('/', routes);

app.listen(3030, ()=>{
  console.log('Server running on Port 3030');
})


