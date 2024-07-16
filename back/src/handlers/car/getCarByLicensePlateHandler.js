const getCarByLicensePlateController = require('../../controllers/car/getCarByLicensePlateController'); // Importa el controlador para obtener un carro por placa

// Handler para obtener un carro por su placa
const getCarByLicensePlateHandler = async (req, res) => {
  try {
    const { licensePlate } = req.params; // Obtiene la placa de los parámetros de la solicitud
    console.log(JSON.stringify(licensePlate)); //
    const car = await getCarByLicensePlateController(licensePlate); // Llama al controlador para obtener el carro
    res.status(200).json(car); // Envía la respuesta con el carro encontrado
  } catch (error) {
    // Maneja cualquier error que ocurra durante la búsqueda
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCarByLicensePlateHandler; // Exporta el handler
