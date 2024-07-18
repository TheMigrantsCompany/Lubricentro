const { User } = require('../../config/db'); // Importa el modelo User

// Controlador para alternar el estado activo de un usuario
const toggleUserActiveStateController = async (id) => {
    try {
        const user = await User.findByPk(id); // Encuentra el usuario por su ID

        if (!user) {
            throw new Error('Car not found'); // Lanza un error si el usuario no existe
    }

        user.Active = !user.Active; // Alterna el estado del campo Active
        await user.save(); // Guarda los cambios en la base de datos

        return user;
    } catch (error) {
        throw new Error('Error toggling car active state: ' + error.message); // Manejo de errores
    }
};

module.exports = toggleUserActiveStateController;