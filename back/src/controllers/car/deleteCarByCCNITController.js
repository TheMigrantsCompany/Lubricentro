const { Car } = require('../../config/db'); // Importa el modelo Car    

// Controlador para eliminar un carro por su CC_NIT
const deleteCarByCCNITController = async (CC_NIT) => {
  try {
    const car = await Car.findOne({ where: { CC_NIT } }); // Busca un carro por su CC_NIT
    if (!car) {
      throw new Error('Car not found'); // Manejo de caso de carro no encontrado
    }
    await car.destroy(); // Elimina el carro
    return car;
  } catch (error) {
    throw new Error('Error deleting car: ' + error.message); // Manejo de errores
  }
};

module.exports = deleteCarByCCNITController;
