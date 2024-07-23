const { User } = require("../../config/db");
const admin = require('firebase-admin');

const deleteUser = async (id_User) => {
    // Eliminar la orden de la base de datos
    const deletedUser = await User.destroy({
        where: {
            id_User: id_User
        }
        });
        

    return deletedUser ? true : false;
};

module.exports = deleteUser;