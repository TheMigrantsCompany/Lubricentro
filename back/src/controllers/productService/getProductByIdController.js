const { ProductService } = require('../../config/db');

const getProductByIdController = async (id) => {
  try {
    const product = await ProductService.findByPk(id);
    if (!product) throw new Error('Producto no encontrado');
    return product;
  } catch (error) {
    throw new Error('Error al obtener el producto por ID');
  }
};

module.exports = getProductByIdController;
