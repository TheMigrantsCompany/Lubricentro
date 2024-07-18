const { ServiceOrder, User } = require('../../config/db'); // Ajusta la ruta según tu estructura de proyecto

// Función para crear una orden de servicio
const postOrder = async (id_User, paymentMethod, items, warnings, res) => {
    try {
        // Obtener información del usuario
        const user = await User.findByPk(id_User);
        if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const userInformation = {
            id_User: user.id_User,
            nameLogin: user.Name,
            emailLogin: user.Mail,
        };

        const date = new Date(); // Fecha actual

        const newServiceOrder = await ServiceOrder.create({
            UserInformation: userInformation,
            Date: date,
            PaymentMethod: paymentMethod,
            Items: items,
            Warnings: warnings || '', // Advertencias opcionales
    });

        console.log("Orden de Servicio:", newServiceOrder);
        console.log(newServiceOrder.id_Service_Order);
        res.status(201).json({ 
            message: 'Orden de servicio creada exitosamente',
            order: newServiceOrder,
        });
    } catch (error) {
        console.error('Error creando la orden de servicio:', error);
        res.status(500).json({ error: 'Fallo al crear la orden de servicio' });
    }
};

module.exports = postOrder;