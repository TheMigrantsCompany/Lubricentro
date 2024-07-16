const { Car } = require('../../config/db'); // Importa el modelo Car

// Función para obtener todos los carros
const getAllCarsController = async () => {
  try {
    // Recupera todos los registros de carros de la base de datos
    const cars = await Car.findAll();
    return cars;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la recuperación
    throw new Error('Error fetching cars: ' + error.message);
  }
};

module.exports = getAllCarsController; // Exporta la función
