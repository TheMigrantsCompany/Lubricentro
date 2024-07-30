// Importa el controlador para la carga masiva de productos
const createBulkProductsController = require('../../controllers/productService/createBulkProductsController');

// Handler para la ruta POST /products/bulk
module.exports = async (req, res) => {
  try {
    // Llama al controlador para crear productos en masa y pasa los datos del cuerpo de la solicitud
    const newProducts = await createBulkProductsController(req.body);
    // Responde con un código 201 y los nuevos productos creados
    res.status(201).json(newProducts);
  } catch (error) {
    // En caso de error, responde con un código 400 y el mensaje de error
    res.status(400).json({ error: error.message });
  }
};