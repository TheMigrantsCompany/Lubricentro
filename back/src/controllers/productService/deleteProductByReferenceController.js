const { ProductService } = require('../../config/db');

const deleteProductByReferenceController = async (Reference) => {
  const product = await ProductService.findOne({ where: { Reference: Reference } });
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  await product.destroy();
  return product;
};

module.exports = deleteProductByReferenceController;
