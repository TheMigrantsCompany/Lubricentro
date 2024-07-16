const getCarByCCNITController = require('../../controllers/car/getCarByCCNITController'); // Importa el contolador para para obtener un carro por CC-NIT

// Handler para obtener un carro por su CC_NIT
const getCarByCCNITHandler = async (req, res) => {
  try {
    const { CC_NIT } = req.params; // Obtiene el CC_NIT de los parámetros de la solicitud
    const car = await getCarByCCNITController(CC_NIT); // Obtiene el carro por su CC_NIT
    res.status(200).json(car); // Responde con el carro encontrado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = getCarByCCNITHandler;
