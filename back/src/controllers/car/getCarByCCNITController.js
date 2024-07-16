const { Car } = require('../../config/db'); // Importa el modelo Car
// Controlador para obtener un carro por su CC_NIT
const getCarByCCNITController = async (CC_NIT) => {
  try {
    const car = await Car.findOne({ where: { CC_NIT } }); // Busca un carro por su CC_NIT
    if (!car) {
      throw new Error('Car not found'); // Manejo de caso de carro no encontrado
    }
    return car;
  } catch (error) {
    throw new Error('Error fetching car: ' + error.message); // Manejo de errores
  }
};

module.exports = getCarByCCNITController;
