// Importa el controlador para borrar una categoría
const deleteCategoryController = require('../../controllers/category/deleteCategoryController');

// Handler para la ruta DELETE /categories/:id
module.exports = async (req, res) => {
    try {
        // Llama al controlador con el ID de la categoría desde los parámetros de la solicitud
        const result = await deleteCategoryController(req.params.id);
        // Responde con el mensaje de confirmación y el código de estado 200
        res.status(200).json(result);
    } catch (error) {
        // Responde con el error y el código de estado 404
        res.status(404).json({ error: error.message });
    }
};
