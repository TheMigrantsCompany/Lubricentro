// Importa el controlador para obtener todas las categorías
const getAllCategoriesController = require('../../controllers/category/getAllCategoriesController');

// Handler para la ruta GET /categories
module.exports = async (req, res) => {
    try {
        // Llama al controlador para obtener todas las categorías
        const categories = await getAllCategoriesController();
        // Responde con la lista de categorías y el código de estado 200
        res.status(200).json(categories);
    } catch (error) {
        // Responde con el error y el código de estado 404
        res.status(404).json({ error: error.message });
    }
};
