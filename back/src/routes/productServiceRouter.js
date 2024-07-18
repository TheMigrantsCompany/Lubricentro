const express = require('express');

const createProductHandler = require('../handlers/productService/createProductHandler');
const getAllProductsHandler = require('../handlers/productService/getAllProductsHandler');
const getProductByIdHandler = require('../handlers/productService/getProductByIdHandler');
const getProductByNameHandler = require('../handlers/productService/getProductByNameHandler');
const getProductsByCategoryHandler = require('../handlers/productService/getProductsByCategoryHandler');
const updateProductHandler = require('../handlers/productService/updateProductHandler');
const updateProductActiveHandler = require('../handlers/productService/updateProductActiveHandler');
const deleteProductByIdHandler = require('../handlers/productService/deleteProductByIdHandler');
const deleteProductByReferenceHandler = require('../handlers/productService/deleteProductByReferenceHandler');


const productRouter = express.Router();


// Rutas para el modelo de productos

// Endpoint para crear un nuevo producto
productRouter.post('/', createProductHandler);

// Endpoint para obtener todos los productos
productRouter.get('/', getAllProductsHandler);

// Endpoint para obtener un producto por su ID
productRouter.get('/id/:id', getProductByIdHandler);

// Endpoint para obtener un producto por su nombre
productRouter.get('/name/:name', getProductByNameHandler);

// Endpoint para obtener productos por categoría
productRouter.get('/category/:categoryId', getProductsByCategoryHandler);

// Endpoint para actualizar los detalles de un producto por su ID
productRouter.put('/:id', updateProductHandler);

// Endpoint para actualizar el estado activo/inactivo de un producto por su ID
productRouter.patch('/:id/deactive', updateProductActiveHandler);

// Endpoint para eliminar un producto por su ID
productRouter.delete('/:id', deleteProductByIdHandler);

// Endpoint para eliminar un producto por su referencia 
productRouter.delete('/Reference/:Reference', deleteProductByReferenceHandler);


module.exports = productRouter;