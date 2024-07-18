// getUsersOrders.js
const { ServiceOrder, Sequelize } = require('../../config/db');

const getUsersOrders = async (id_User) => {
    try {
        console.log(`Buscando órdenes para el usuario con id: ${id_User}`);

        const orders = await ServiceOrder.findAll({
        where: {
            'UserInformation.id_User': id_User
        }
    });

        console.log(`Órdenes encontradas: ${orders.length}`);
        return orders;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error('Error fetching user orders');
    }
};

module.exports = getUsersOrders;
