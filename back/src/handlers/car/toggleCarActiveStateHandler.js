
const deactivateCarController = require('../../controllers/car/toggleCarActiveStateController'); // Importar el controlador para desactivar un carro

// Handler para desactivar un carro por su ID
const deactivateCarHandler = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID de los parámetros de la solicitud
    const deactivatedCar = await deactivateCarController(id); // Desactiva el carro
    res.status(200).json(deactivatedCar); // Responde con el carro desactivado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = deactivateCarHandler;
