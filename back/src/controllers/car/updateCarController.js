const { Car } = require('../../config/db'); // Importa el modelo Car

// Controlador para actualizar un carro por su ID
const updateCarController = async (id_Car, carData) => {
  try {
    const car = await Car.findByPk(id_Car); // Busca un carro por su ID
    if (!car) {
      throw new Error('Car not found'); // Manejo de caso de carro no encontrado
    }
    await car.update(carData); // Actualiza los datos del carro
    return car;
  } catch (error) {
    throw new Error('Error updating car: ' + error.message); // Manejo de errores
  }
};

module.exports = updateCarController;
