const express = require('express');

const createCarHandler = require('../handlers/car/createCarHandler');
const getAllCarsHandler = require('../handlers/car/getAllCarsHandler');
const getCarByLicensePlateHandler = require('../handlers/car/getCarByLicensePlateHandler');
const getCarByIdHandler = require('../handlers/car/getCarByIdHandler');
const getCarByCCNITHandler = require('../handlers/car/getCarByCCNITHandler');
const updateCarHandler = require('../handlers/car/updateCarHandler');
const deactivateCarHandler = require('../handlers/car/deactivateCarHandler');
const deleteCarByLicensePlateHandler = require('../handlers/car/deleteCarByLicensePlateHandler');
const deleteCarByCCNITHandler = require('../handlers/car/deleteCarByCCNITHandler'); 

const carRouter = express.Router();

// Manejador para la creación de un carro
carRouter.post('/', createCarHandler);

/*// Manejador para obtener todos los carros
carRouter.get('/', getAllCarsHandler);

// Manejador para obtener un carro por placa
carRouter.get('/license-plate/:licensePlate', getCarByLicensePlateHandler);

// Manejador para obtener un carro por ID
carRouter.get('/id/:id', getCarByIdHandler);

// Manejador para obtener un carro por CC/NIT
carRouter.get('/cc-nit/:CC_NIT', getCarByCCNITHandler);

// Manejador para actualizar un carro por ID
carRouter.put('/:id', updateCarHandler);

// Manejador para desactivar un carro por ID
carRouter.patch('/deactivate/:id', deactivateCarHandler);

// Manejador para eliminar un carro por placa
carRouter.delete('/license-plate/:licensePlate', deleteCarByLicensePlateHandler);

// Manejador para eliminar un carro por CC/NIT
carRouter.delete('/cc-nit/:CC_NIT', deleteCarByCCNITHandler); */

module.exports = carRouter;
