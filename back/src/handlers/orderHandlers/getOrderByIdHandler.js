const getOrderById = require('../../controllers/orderControllers/getOrderById');

const getOrderByIdHandler = async (req, res) => {
    try {
        const { id_Service_Order } = req.params;
        const order = await getOrderById(id_Service_Order);
        if (!order) {
            return res.status(404).json({ error: 'Orden no encontrada' });
    }
        res.status(200).json(order);
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        res.status(500).json({ error: 'Fallo al obtener la orden por ID' });
    }
};

module.exports = getOrderByIdHandler;