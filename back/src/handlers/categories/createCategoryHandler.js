// Importa el controlador para crear una categoría
const createCategoryController = require('../../controllers/category/createCategoryController');

// Handler para la ruta POST /categories
module.exports = async (req, res) => {
    try {
        // Llama al controlador con los datos de la categoría desde el cuerpo de la solicitud
        const newCategory = await createCategoryController(req.body);
        // Responde con la nueva categoría y el código de estado 201
        res.status(201).json(newCategory);
    } catch (error) {
        // Responde con el error y el código de estado 400
        res.status(400).json({ error: error.message });
    }
};
