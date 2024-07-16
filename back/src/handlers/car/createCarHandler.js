const createCarController = require('../../controllers/car/createCarController'); // Importa el controlador para crear un carro
const generateQRCode = require('../../utils/generateQRCode'); // Importa la función para generar QR

// Handler para la creación de un nuevo carro
const createCarHandler = async (req, res) => {
  try {
    const carData = req.body; // Obtiene los datos del cuerpo de la solicitud

    const newCar = await createCarController(carData); // Llama al controlador para crear el carro

    // Genera el código QR para el nuevo carro si tiene LicensePlate
    if (newCar.LicensePlate) {
      newCar.QR = await generateQRCode(`Car ID: ${newCar.id_Car}`);
      await newCar.save(); // Guarda el nuevo carro con el QR
    }

    res.status(201).json(newCar); // Envía la respuesta con el nuevo carro
  } catch (error) {
    // Maneja cualquier error que ocurra durante la creación
    res.status(500).json({ error: error.message });
  }
};

module.exports = createCarHandler; // Exporta el handler