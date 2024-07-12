const deleteCarByLicensePlateController = require('../../controllers/car/deleteCarByLicensePlateController'); // Importar el controlador para eliminar un carro por su placa

// Handler para eliminar un carro por su placa
const deleteCarByLicensePlateHandler = async (req, res) => {
  try {
    const { licensePlate } = req.params; // Obtiene la placa de los parámetros de la solicitud
    const deletedCar = await deleteCarByLicensePlateController(licensePlate); // Elimina el carro por su placa
    res.status(200).json(deletedCar); // Responde con el carro eliminado
  } catch (error) {
    res.status(500).json({ error: error.message }); // Manejo de errores
  }
};

module.exports = deleteCarByLicensePlateHandler;
