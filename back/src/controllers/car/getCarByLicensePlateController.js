const { Car } = require('../../config/db'); // Importa el modelo Car
const { Op } = require('sequelize'); // Importa Op para operadores de Sequelize

// Función para obtener un carro por su placa (coincidencia parcial)
const getCarByLicensePlateController = async (licensePlate) => {
  try {
    // Busca un carro con una coincidencia parcial en la placa
    console.log(`Searching for license plate: ${licensePlate}`);
    const car = await Car.findOne({
      where: {
        LicensePlate: {
          [Op.like]: `%${licensePlate}%` // Busca coincidencias parciales
        }
      }
    });
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
