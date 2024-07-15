const { Category } = require('../../config/db');

// Controlador para crear una nueva categoría
module.exports = async (categoryData) => {
    // Crea una nueva categoría en la base de datos con los datos proporcionados
    const newCategory = await Category.create(categoryData);
    return newCategory;
};
