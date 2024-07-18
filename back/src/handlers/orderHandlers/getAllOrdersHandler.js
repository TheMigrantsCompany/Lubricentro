const getAllOrders = require('../../controllers/orderControllers/getAllOrders');

const getAllOrdersHandler = async (req, res) => {
    await getAllOrders(req, res);
};

module.exports = getAllOrdersHandler;