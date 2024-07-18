const { ProductService } = require('../../config/db');

const deleteProductByIdController = async (id) => {
  const product = await ProductService.findByPk(id);
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  await product.destroy();
  return product;
};

module.exports = deleteProductByIdController;
