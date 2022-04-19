const express = require('express');
const router = express.Router();

const vehiculoController = require('../controllers/vehiculoController')

router.get('/', vehiculoController.list)

router.post('/add', vehiculoController.save)

router.get('/vehiculos', vehiculoController.view)

router.get('/delete/:placa', vehiculoController.delete)

router.get('/update/:placa', vehiculoController.edit)

router.post('/update/:placa', vehiculoController.update)

router.get('/marcas', vehiculoController.marcas)

router.post('/add_marca', vehiculoController.save_marca)

router.get('/lineas', vehiculoController.lineas)

router.post('/add_linea', vehiculoController.save_lineas)

module.exports = router;