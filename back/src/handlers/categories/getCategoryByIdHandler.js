// Importa el controlador para obtener una categoría por ID
const getCategoryByIdController = require('../../controllers/category/getCategoryByIdController');

// Handler para la ruta GET /categories/:id
module.exports = async (req, res) => {
    try {
        // Llama al controlador con el ID de la categoría desde los parámetros de la solicitud
        const category = await getCategoryByIdController(req.params.id);
        // Responde con la categoría y el código de estado 200
        res.status(200).json(category);
    } catch (error) {
        // Responde con el error y el código de estado 404
        res.status(404).json({ error: error.message });
    }
};
