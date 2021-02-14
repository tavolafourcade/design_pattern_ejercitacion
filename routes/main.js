var express = require('express');
var router = express.Router();

var productoController = require('../controllers/mainController');

router.get('/listar', productoController.listar);

module.exports = router;