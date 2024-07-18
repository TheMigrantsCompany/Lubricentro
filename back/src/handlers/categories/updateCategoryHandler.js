// Importa el controlador para actualizar una categoría
const updateCategoryController = require('../../controllers/category/updateCategoryController');

// Handler para la ruta PUT /categories/:id
module.exports = async (req, res) => {
    try {
        // Llama al controlador con el ID de la categoría y los datos actualizados desde la solicitud
        const updatedCategory = await updateCategoryController(req.params.id, req.body);
        // Responde con la categoría actualizada y el código de estado 200
        res.status(200).json(updatedCategory);
    } catch (error) {
        // Responde con el error y el código de estado 404
        res.status(404).json({ error: error.message });
    }
};
