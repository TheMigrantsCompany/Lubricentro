const { ServiceOrder } = require('../../config/db');

const getOrderById = async (id_Service_Order) => {
    try {
        const order = await ServiceOrder.findByPk(id_Service_Order);
        return order;
    } catch (error) {
        throw new Error('Error fetching order by ID');
    }
};

module.exports = getOrderById;