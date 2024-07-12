const { Car } = require('../../config/db'); // Importa el modelo Car

// Función para obtener un carro por su placa
const getCarByLicensePlateController = async (licensePlate) => {
  try {
    // Busca un carro con la placa especificada
    console.log(JSON.stringify(licensePlate));
    const car = await Car.findOne({ where: { LicensePlate: licensePlate } });
    if (!car) {
      throw new Error('Car not found'); // Lanza un error si no se encuentra el carro
    }
    return car;
  } catch (error) {
    // Maneja cualquier error que ocurra durante la búsqueda
    throw new Error('Error fetching car: ' + error.message);
  }
};

module.exports = getCarByLicensePlateController; // Exporta la función
