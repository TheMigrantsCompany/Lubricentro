const { ProductService } = require('../../config/db');

const updateProductActiveController = async (id) => {
    // Busca el producto por su ID
    const product = await ProductService.findByPk(id);
    
    // Si el producto no se encuentra, lanza un error
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    console.log('Primer estado del producto', product.Active);
    // Alterna el estado activo del producto
    product.Active = !product.Active;
    
    console.log('product active', product.active);
    // Guarda los cambios en la base de datos
    await product.save();
    
    // Devuelve el producto actualizado
    return product;
  };
  
module.exports = updateProductActiveController; // Exporta el controlador

