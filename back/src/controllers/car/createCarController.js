const { Car } = require('../../config/db'); // Importa el modelo Car

// Función para crear un nuevo carro
const createCarController = async (carData) => {
  try {
    // Verifica si ya existe un carro con la misma LicensePlate
    if (carData.LicensePlate) {
      const existingCar = await Car.findOne({ where: { LicensePlate: carData.LicensePlate } });
      if (existingCar) {
        throw new Error('Ya existe un carro que tiene esta placa.');
      }
    }

    // Crea un nuevo registro de carro en la base de datos
    const newCar = await Car.create(carData);
    return newCar;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la creación
    throw new Error('Error creating car: ' + error.message);
  }
};

module.exports = createCarController; // Exporta la función
