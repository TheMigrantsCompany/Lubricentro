// Importa el controlador para obtener una categoría por nombre
const getCategoryByNameController = require('../../controllers/category/getCategoryByNameController');

// Handler para la ruta GET /categories/name/:name
module.exports = async (req, res) => {
    try {
        // Llama al controlador con el nombre de la categoría desde los parámetros de la solicitud
        const category = await getCategoryByNameController(req.params.name);
        // Responde con la categoría y el código de estado 200
        res.status(200).json(category);
    } catch (error) {
        // Responde con el error y el código de estado 404
        res.status(404).json({ error: error.message });
    }
};
