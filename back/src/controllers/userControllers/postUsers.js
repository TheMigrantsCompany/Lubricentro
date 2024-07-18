const { where } = require("sequelize");
const { User } = require("../../config/db");

const postUserController = async (req, res) => {
	try {
		const { Name, Mail, Image, Rol, Password } = req.body;
		const existingUser = await User.findOne({ where: { Mail } });

		if (existingUser) {
			// Si el usuario ya existe, simplemente devolvemos el usuario existente
			return res.status(200).json(existingUser);
		}
		let rolUser = false;
		if (
			Mail === "lubricantesyaditivos.calle6@gmail.com" ||
			Mail === "migrants.comapany@gmail.com"
		) {
			rolUser = true;
		}

		// Si el usuario no existe, lo creamos
		const newUser = await User.create({
			Mail,
			Name,
			Image: Image || null,
			Rol: rolUser,
			Password
			// Aquí puedes añadir más campos si es necesario
		});

		res.status(201).json(newUser);
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ message: "Error interno del servidor." });
	}
};

module.exports = postUserController;