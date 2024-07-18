const postOrder = require('../../controllers/orderControllers/postOrder');

const postOrderHandler = async (req, res) => {
    const id_User = req.params.id; // Asegúrate de que el id del usuario está en los parámetros de la ruta
    const { paymentMethod, items, warnings } = req.body; // Datos enviados en el cuerpo de la solicitud

    try {
        await postOrder(id_User, paymentMethod, items, warnings, res);
    } catch (error) {
        console.error('Error en createServiceOrderHandler:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = postOrderHandler;