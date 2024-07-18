// Importa el controlador para crear un producto
const createProductController = require('../../controllers/productService/createProductController');

// Handler para la ruta POST /products
module.exports = async (req, res) => {
  try {
    const newProduct = await createProductController(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
