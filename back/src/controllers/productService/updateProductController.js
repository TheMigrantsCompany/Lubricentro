const { ProductService } = require('../../config/db');

const updateProductController = async (id, updateData) => {
  const product = await ProductService.findByPk(id);
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  await product.update(updateData);
  return product;
};

module.exports = updateProductController;
