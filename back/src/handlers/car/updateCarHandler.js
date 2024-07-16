const updateCarController= require('../../controllers/car/updateCarController'); // Importa el controlador para actualizar un carro po su ID

// Handler para actualizar un carro por su ID
const updateCarHandler = async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID de los parámetros de la solicitud
    const carData = req.body; // Obtiene los datos del cuerpo de la solicitud
    const updatedCar = await updateCarController(id, carData); // Actualiza el carro
    res.status(200).json(updatedCar); // Responde con el carro actualizado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = updateCarHandler;
