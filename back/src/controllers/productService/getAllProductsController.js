const { ProductService } = require('../../config/db');

const getAllProductsController = async () => {
  try {
    const products = await ProductService.findAll();
    return products;
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};

module.exports = getAllProductsController;
