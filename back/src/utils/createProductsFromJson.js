const { ProductService, Category } = require('../config/db'); // Importa los modelos ProductService y Category
const sequelize = require('sequelize'); // Importa Sequelize para las consultas
const fs = require('fs'); // Importa el módulo fs para leer archivos

// Define una función asíncrona para crear productos a partir de un archivo JSON
const createProductsFromJson = async (jsonFilePath) => {
  try {
    // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
    const data = fs.readFileSync(jsonFilePath, 'utf-8');
    const products = JSON.parse(data);

    // Itera sobre cada producto en el JSON
    for (const product of products) {
      // Extrae las propiedades del producto
      const { Name, Quantity, Reference, Price_Cl, Price_Tl, category } = product;

      // Normaliza el nombre de la categoría para ignorar mayúsculas, minúsculas y acentos
      const normalizedCategoryName = category.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      
      // Busca la categoría en la base de datos
      let foundCategory = await Category.findOne({
        where: sequelize.where(sequelize.fn('lower', sequelize.col('Name')), normalizedCategoryName)
      });

      // Si la categoría no existe, la crea
      if (!foundCategory) {
        foundCategory = await Category.create({ Name: category });
      }

      // Crea el producto asociado a la categoría encontrada o creada
      await ProductService.create({
        Name,
        Quantity,
        Reference,
        Price_Cl,
        Price_Tl,
        id_Category: foundCategory.id_Category
      });
    }

    // Muestra un mensaje de éxito
    console.log('Productos creados correctamente');
  } catch (error) {
    // Muestra un mensaje de error si algo falla
    console.error('Error al crear los productos:', error);
  }
};

// Exporta la función para que pueda ser utilizada en otras partes de la aplicación
module.exports = createProductsFromJson;