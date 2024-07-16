const express = require('express');

const createProductHandler = require('../handlers/productService/createProductHandler');
const getAllProductsHandler = require('../handlers/productService/getAllProductsHandler');
const getProductByIdHandler = require('../handlers/productService/getProductByIdHandler');
const getProductByNameHandler = require('../handlers/productService/getProductByNameHandler');
const getProductsByCategoryHandler = require('../handlers/productService/getProductsByCategoryHandler');
const updateProductHandler = require('../handlers/productService/updateProductHandler');
const updateProductActiveHandler = require('../handlers/productService/updateProductActiveHandler');
const deleteProductByIdHandler = require('../handlers/productService/deleteProductByIdHandler');
const deleteProductByNameHandler = require('../handlers/productService/deleteProductByNameHandler');
const manageProductStockHandler = require('../handlers/productService/manageProductStockHandler');

const productRouter = express.Router();


/*// Rutas para el modelo de productos

// Endpoint para crear un nuevo producto
productRouter.post('/products', createProductHandler);

// Endpoint para obtener todos los productos
productRouter.get('/products', getAllProductsHandler);

// Endpoint para obtener un producto por su ID
productRouter.get('/products/:id', getProductByIdHandler);

// Endpoint para obtener un producto por su nombre
productRouter.get('/products/name/:name', getProductByNameHandler);

// Endpoint para obtener productos por categoría
productRouter.get('/products/category/:categoryId', getProductsByCategoryHandler);

// Endpoint para actualizar los detalles de un producto por su ID
productRouter.put('/products/:id', updateProductHandler);

// Endpoint para actualizar el estado activo/inactivo de un producto por su ID
productRouter.put('/products/:id/active', updateProductActiveHandler);

// Endpoint para eliminar un producto por su ID
productRouter.delete('/products/:id', deleteProductByIdHandler);

// Endpoint para eliminar un producto por su nombre
productRouter.delete('/products/name/:name', deleteProductByNameHandler);

// Endpoint para gestionar el stock de un producto por su ID
productRouter.put('/products/:id/stock', manageProductStockHandler);*/

module.exports = productRouter;