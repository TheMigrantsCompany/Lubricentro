const { User } = require("../../config/db");

const putUserController = async (id, userData, res) => {
	try {
		// Buscar el usuario por su ID
		const user = await User.findByPk(id);
		console.log(id);

		// Verificar si el usuario existe
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Actualizar los campos del usuario con los datos proporcionados
		user.Name = userData.Name || user.Name;
		user.Phone = userData.Phone || user.Phone;
		user.Image = userData.Image || user.Image;
		user.Address = userData.Address || user.Address;
		user.Active = userData.Active || user.Active;
		// user.rol = userData.rol || user.rol;

		if (typeof userData.Rol !== "undefined") {
			user.Rol = userData.Rol;
		}

		if (typeof userData.Active !== "undefined") {
			user.Active = userData.Active;
		}

		// Guardar los cambios en la base de datos
		await user.save();

		res.status(200).json(user);
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

module.exports = putUserController;