const deleteProductByReferenceController = require('../../controllers/productService/deleteProductByReferenceController');

module.exports = async (req, res) => {
  try {
    const { Reference } = req.params;
    const deletedProduct = await deleteProductByReferenceController(Reference);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
