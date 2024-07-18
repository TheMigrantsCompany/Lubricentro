const { Category } = require('../../config/db');

// Controlador para obtener una categoría por su nombre
module.exports = async (categoryName) => {
    // Encuentra la categoría por su nombre en la base de datos
    const category = await Category.findOne({ where: { Name: categoryName } });
    if (!category) {
        throw new Error('Category not found');
    }
    return category;
};
