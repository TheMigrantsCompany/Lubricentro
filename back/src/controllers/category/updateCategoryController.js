const { Category } = require('../../config/db');

// Controlador para actualizar una categoría por su ID
module.exports = async (categoryId, categoryData) => {
    // Encuentra la categoría por su ID en la base de datos
    const category = await Category.findByPk(categoryId);
    if (!category) {
        throw new Error('Category not found');
    }
    console.log('categoryData', categoryData);
    // Actualiza la categoría con los nuevos datos
    await category.update(categoryData);
    return category;
};
