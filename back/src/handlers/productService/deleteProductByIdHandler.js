const deleteProductByIdController = require('../../controllers/productService/deleteProductByIdController');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProductByIdController(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
