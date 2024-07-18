const { Category } = require('../../config/db');

// Controlador para obtener una categoría por su ID
module.exports = async (categoryId) => {
    // Encuentra la categoría por su ID en la base de datos
    const category = await Category.findByPk(categoryId);
    if (!category) {
        throw new Error('Category not found');
    }
    return category;
};
