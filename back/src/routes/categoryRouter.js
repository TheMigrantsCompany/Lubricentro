//importar dependencias 
const express = require('express');

const createCategoryHandler = require('../handlers/categories/createCategoryHandler');
const getAllCategoriesHandler = require('../handlers/categories/getAllCategoriesHandler');
const getCategoryByIdHandler = require('../handlers/categories/getCategoryByIdHandler');
const getCategoryByNameHandler = require('../handlers/categories/getCategoryByNameHandler');
const updateCategoryHandler = require('../handlers/categories/updateCategoryHandler');
const deleteCategoryHandler = require('../handlers/categories/deleteCategoryHandler');

const categoryRouter = express.Router();

// Rutas para el modelo de categorías
//Ruta para crear el modelo de categorías
categoryRouter.post('/', createCategoryHandler);
//Ruta para obtener todas las categorías
categoryRouter.get('/', getAllCategoriesHandler);
//Ruta para obtener la categoria por id
categoryRouter.get('/id/:id', getCategoryByIdHandler);
//Ruta para obtener la categoria por name
categoryRouter.get('/name/:name', getCategoryByNameHandler);
//Ruta para modificar las categoria por id
categoryRouter.put('/id/:id', updateCategoryHandler);
//Ruta para borrar la categoria por id
categoryRouter.delete('/id/:id', deleteCategoryHandler);

module.exports = categoryRouter;
