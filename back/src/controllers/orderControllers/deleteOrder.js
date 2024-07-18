const { ServiceOrder } = require('../../config/db');

const deleteOrder = async (id_Service_Order) => {
    try {
        // Eliminar la orden de la base de datos
        const deletedOrder = await ServiceOrder.destroy({
        where: {
            id_Service_Order: id_Service_Order
        }
        });
    
    // Si se eliminó correctamente, devolver true; de lo contrario, devolver false
        return deletedOrder ? true : false;
    } catch (error) {
        throw new Error('Error deleting order');
    }
};

module.exports = deleteOrder;