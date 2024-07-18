const getProductByIdController = require('../../controllers/productService/getProductByIdController');

module.exports = async (req, res) => {
  try {
    const product = await getProductByIdController(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
