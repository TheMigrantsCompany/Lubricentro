const { ServiceOrder, User, Car } = require('../../config/db'); // Ajusta la ruta según tu estructura de proyecto

// Función para crear una orden de servicio
const postOrder = async (id_User, id_Car, paymentMethod, items, warnings, res) => {
    try {
        console.log('Datos de entrada:', { id_User, id_Car, paymentMethod, items, warnings });

        // Validar que id_Car sea un UUID
        const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        if (!uuidRegex.test(id_Car)) {
            return res.status(400).json({ error: 'El ID del coche no es un UUID válido' });
        }

        // Obtener información del coche
        const car = await Car.findByPk(id_Car);
        if (!car) {
            return res.status(404).json({ error: 'Coche no encontrado' });
        }

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
            id_User: id_User, // Asegúrate de que estos campos se asignan correctamente
            id_Car: id_Car // Asegúrate de que estos campos se asignan correctamente
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