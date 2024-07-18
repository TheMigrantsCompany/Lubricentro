const getProductsByCategoryController = require('../../controllers/productService/getProductsByCategoryController');

module.exports = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const products = await getProductsByCategoryController(categoryId);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
