const { Router } = require("express");
const postOrderHandler = require('../handlers/orderHandlers/postOrderHandler'); 
const getAllOrdersHandler = require('../handlers/orderHandlers/getAllOrdersHandler'); 
const getOrderByIdHandler = require('../handlers/orderHandlers/getOrderByIdHandler');
const getUsersOrdersHandler = require('../handlers/orderHandlers/getUsersOrdersHandler');
const deleteOrderHandler= require('../handlers/orderHandlers/deleteOrderHandler');

const orderRouter = Router();

orderRouter.get("/",getAllOrdersHandler);
orderRouter.post("/service-order/:id", postOrderHandler);
orderRouter.get('/:id_Service_Order', getOrderByIdHandler);
orderRouter.get('/:id_User/orders', getUsersOrdersHandler);
orderRouter.delete('/:id_Service_Order', deleteOrderHandler);

module.exports = orderRouter;