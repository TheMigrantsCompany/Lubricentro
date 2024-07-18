// getUsersOrdersHandler.js
const getUsersOrders = require('../../controllers/orderControllers/getUsersOrders');
const { User } = require('../../config/db');

const getUsersOrdersHandler = async (req, res) => {
    const { id_User } = req.params;

    try {
        // Verificar si el usuario existe en la base de datos
        const user = await User.findByPk(id_User);
        if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        console.log(`Usuario encontrado: ${user.name}`);

        // Obtener las órdenes asociadas al usuario
        const orders = await getUsersOrders(id_User);
        res.status(200).json(orders);

    } catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({ error: 'Fallo al obtener las órdenes del usuario' });
    }
};

module.exports = getUsersOrdersHandler;
