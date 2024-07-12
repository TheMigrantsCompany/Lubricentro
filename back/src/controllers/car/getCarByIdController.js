const { Car } = require('../../config/db'); // Importa el modelo Car

// Controlador para obtener un carro por su ID
const getCarByIdController = async (id_Car) => {
  try {
    const car = await Car.findByPk(id_Car); // Busca un carro por su ID
    if (!car) {
      throw new Error('Car not found'); // Manejo de caso de carro no encontrado
    }
    return car;
  } catch (error) {
    throw new Error('Error fetching car: ' + error.message); // Manejo de errores
  }
};

module.exports = getCarByIdController;
