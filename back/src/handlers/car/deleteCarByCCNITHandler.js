const deleteCarByCCNITController = require('../../controllers/car/deleteCarByCCNITController'); // Importar el controlador para eliminar un carro por su CC_NIT

// Handler para eliminar un carro por su CC_NIT
const deleteCarByCCNITHandler = async (req, res) => {
  try {
    const { CC_NIT } = req.params; // Obtiene el CC_NIT de los parámetros de la solicitud
    const deletedCar = await deleteCarByCCNITController(CC_NIT); // Elimina el carro por su CC_NIT
    res.status(200).json(deletedCar); // Responde con el carro eliminado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = deleteCarByCCNITHandler;
