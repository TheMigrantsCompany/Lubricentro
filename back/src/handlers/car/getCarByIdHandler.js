const getCarByIdController = require('../../controllers/car/getCarByIdController'); // Importa el controlador para obtener un carro por ID

// Handler para obtener un carro por su ID
const getCarByIdHandler = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID de los parámetros de la solicitud
    const car = await getCarByIdController(id); // Obtiene el carro por su ID
    res.status(200).json(car); // Responde con el carro encontrado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = getCarByIdHandler;
