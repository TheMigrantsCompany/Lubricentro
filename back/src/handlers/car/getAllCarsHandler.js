const getAllCarsController = require('../../controllers/car/getAllCarsController'); // Importa el controlador para obtener todos los carros

// Handler para obtener todos los carros
const getAllCarsHandler = async (req, res) => {
  try {
    const cars = await getAllCarsController(); // Llama al controlador para obtener todos los carros
    res.status(200).json(cars); // Envía la respuesta con todos los carros
  } catch (error) {
    // Maneja cualquier error que ocurra durante la recuperación
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCarsHandler; // Exporta el handler