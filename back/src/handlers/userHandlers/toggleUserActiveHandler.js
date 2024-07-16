const toggleUserActiveStateController = require('../../controllers/userControllers/toggleUserActive'); // Importar el controlador para desactivar un usuario

// Handler para desactivar un carro por su ID
const toggleUserActiveStateHandler = async (req, res) => {
    try {
        const { id } = req.params; // Obtiene el ID de los parámetros de la solicitud
        const deactivatedUser = await toggleUserActiveStateController(id); // Desactiva el usuario
        res.status(200).json(deactivatedUser); // Responde con el usuario desactivado
    } catch (error) {
        res.status(500).json({ error: error.message }); // Manejo de errores
    }
};

module.exports = toggleUserActiveStateHandler;