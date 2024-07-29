// getCarsOrders.js
const { ServiceOrder, Sequelize } = require('../../config/db');

const getCarsOrders = async (id_Car) => {
    try {
        console.log(`Buscando órdenes para el usuario con id: ${id_Car}`);

        const orders = await ServiceOrder.findAll({
        where: {
            'CarInformation.id_User': id_Car
        }
    });

        console.log(`Órdenes encontradas: ${orders.length}`);
        return orders;
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw new Error('Error fetching user orders');
    }
};

module.exports = getCarsOrders;