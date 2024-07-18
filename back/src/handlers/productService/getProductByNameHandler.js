const getProductByNameController = require('../../controllers/productService/getProductByNameController');

const getProductByNameHandler = async (req, res) => {
  const { name } = req.params;

  if (!name || name.length < 3) {
    return res.status(400).json({ message: 'La búsqueda debe contener al menos 3 caracteres.' });
  }

  try {
    const products = await getProductByNameController(name);
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener productos por nombre:", error.message);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = getProductByNameHandler;
