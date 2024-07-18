const { Category } = require('../../config/db');

// Controlador para obtener todas las categorías
module.exports = async () => {
    // Encuentra todas las categorías en la base de datos
    const categories = await Category.findAll();
    return categories;
};
