// getCarsOrdersHandler.js
const getCarsOrders = require('../../controllers/orderControllers/getCarsOrders');
const { Car } = require('../../config/db');

const getCarsOrdersHandler = async (req, res) => {
    const { id_Car } = req.params;

    try {
        // Verificar si el carro existe en la base de datos
        const car = await Car.findByPk(id_Car);
        if (!car) {
        return res.status(404).json({ error: 'Carro no encontrado' });
        }

        console.log(`Carro encontrado: ${car.name}`);

        // Obtener las órdenes asociadas al usuario
        const orders = await getCarsOrders(id_Car);
        res.status(200).json(orders);

    } catch (error) {
        console.error('Error fetching car orders:', error);
        res.status(500).json({ error: 'Fallo al obtener las órdenes del carro' });
    }
};

module.exports = getCarsOrdersHandler;
