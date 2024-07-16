const postUserController = require('../../controllers/userControllers/postUsers');

const postUserHandler = async (req, res) => {
    try {
        await postUserController(req, res);
    } catch (error) {
        console.error("Error in postUserHandler:", error);
        res.status(500).json({ message: "Error interno del servidor." });
    }
};

module.exports = postUserHandler;