// Importa los modelos ProductService y Category desde la configuración de la base de datos
const { ProductService, Category } = require('../../config/db');
const sequelize = require('sequelize');

// Controlador para crear productos en masa
const createBulkProductsController = async (products) => {
  try {
    // Array para almacenar los productos creados
    const createdProducts = [];

    // Itera sobre cada producto en el array recibido
    for (const product of products) {
      const { name, quantity, reference, priceCl, priceTl, category } = product;

      // Normaliza el nombre de la categoría para una búsqueda insensible a mayúsculas/minúsculas
      const normalizedCategoryName = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      // Busca la categoría en la base de datos
      let foundCategory = await Category.findOne({
        where: sequelize.where(sequelize.fn('lower', sequelize.col('Name')), normalizedCategoryName)
      });

      // Si la categoría no existe, créala
      if (!foundCategory) {
        foundCategory = await Category.create({ Name: category });
      }

      // Crea el nuevo producto con los datos proporcionados y la categoría encontrada/creada
      const newProduct = await ProductService.create({
        Name: name,
        Quantity: quantity,
        Reference: reference,
        Price_Cl: priceCl,
        Price_Tl: priceTl,
        id_Category: foundCategory.id_Category
      });

      // Agrega el producto creado al array de productos creados
      createdProducts.push(newProduct);
    }

    // Retorna el array de productos creados
    return createdProducts;
  } catch (error) {
    // En caso de error, lanza un nuevo error con un mensaje específico
    throw new Error('Error al crear productos en masa');
  }
};

module.exports = createBulkProductsController;