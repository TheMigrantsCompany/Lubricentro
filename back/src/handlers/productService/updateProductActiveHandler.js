const updateProductActiveController = require('../../controllers/productService/updateProductActiveController');

const updateProductActiveHandler = async (req, res) => {
  try {
    // Obtiene el ID del producto de los parámetros de la solicitud
    const { id } = req.params;
    // Llama al controlador para alternar el estado activo del producto
    const updatedProduct = await updateProductActiveController(id);
    res.status(200).json(updatedProduct);
  } catch (error){
    res.status(400).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = updateProductActiveHandler;