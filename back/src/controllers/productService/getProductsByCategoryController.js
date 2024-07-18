const { ProductService, Category } = require('../../config/db');

const getProductsByCategoryController = async (categoryId) => {
  const products = await ProductService.findAll({
    where: {
      id_Category: categoryId
    }
  });
  return products;
};

module.exports = getProductsByCategoryController;
