const getAllProductsController = require('../../controllers/productService/getAllProductsController');

module.exports = async (req, res) => {
  try {
    const products = await getAllProductsController();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
