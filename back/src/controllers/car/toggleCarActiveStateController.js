const { Car } = require('../../config/db'); // Importa el modelo Car

// Controlador para alternar el estado activo de un carro
const toggleCarActiveStateController = async (id) => {
  try {
    const car = await Car.findByPk(id); // Encuentra el carro por su ID

    if (!car) {
      throw new Error('Car not found'); // Lanza un error si el carro no existe
    }

    car.Active = !car.Active; // Alterna el estado del campo Active
    await car.save(); // Guarda los cambios en la base de datos

    return car;
  } catch (error) {
    throw new Error('Error toggling car active state: ' + error.message); // Manejo de errores
  }
};

module.exports = toggleCarActiveStateController;
