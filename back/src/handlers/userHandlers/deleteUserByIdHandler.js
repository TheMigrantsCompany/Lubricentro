const deleteUserByIdController = require('../../controllers/userControllers/deleteUsers'); // Importar el controlador para eliminar un usuario por su id

// Handler para eliminar un usuario por su id
const deleteUserByIdHandler = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el id de los parámetros de la solicitud
        const deletedUser = await deleteUserByIdController(id); // Elimina el usuario por su id
        res.status(200).json(deletedUser); // Responde con el usuario eliminado
    } catch (error) {
        res.status(500).json({ error: error.message }); // Manejo de errores
    }
};

module.exports = deleteUserByIdHandler;