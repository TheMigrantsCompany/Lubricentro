const { ProductService, Category } = require('../../config/db');
const sequelize = require('sequelize');

const createProductController = async (data) => {
  try {
    const { name, quantity, reference, priceCl, priceTl, category } = data;

    const normalizedCategoryName = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let foundCategory = await Category.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('Name')), normalizedCategoryName)
    });

    if (!foundCategory) {
      foundCategory = await Category.create({ Name: category });
    }

    const newProduct = await ProductService.create({
      Name: name,
      Quantity: quantity,
      Reference: reference,
      Price_Cl: priceCl,
      Price_Tl: priceTl,
      id_Category: foundCategory.id_Category
    });

    return newProduct;
  } catch (error) {
    throw new Error('Error al crear el producto');
  }
};

module.exports = createProductController;
