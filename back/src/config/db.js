require("dotenv").config(); // Carga las variables de entorno desde un archivo .env

const { Sequelize } = require("sequelize"); // Importa Sequelize para manejar la conexión y modelos de la base de datos
const fs = require("fs"); // Importa el módulo del sistema de archivos para trabajar con archivos
const path = require("path"); // Importa el módulo de rutas para trabajar con rutas de archivos
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; // Desestructura las variables de entorno necesarias para la conexión a la base de datos

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/lubricentro`, // URL de conexión a la base de datos
  {
    logging: false, // Desactiva el registro de logs de Sequelize
    native: false // Desactiva el uso de funciones nativas
  }
);

const basename = path.basename(__filename); // Obtiene el nombre base del archivo actual
const modelDefiners = []; // Array para almacenar las definiciones de los modelos

// Lee todos los archivos de modelos en la carpeta ../models
fs.readdirSync(path.join(__dirname, "..", "models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" // Filtra archivos válidos de modelos
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "..", "models", file))); // Requiere y almacena cada archivo de modelo
  });

// Define cada modelo en Sequelize
modelDefiners.forEach((model) => model(sequelize));

// Capitaliza los nombres de los modelos
let entries = Object.entries(sequelize.models); // Obtiene las entradas de los modelos definidos
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1), // Capitaliza el primer carácter del nombre del modelo
  entry[1]
]);
sequelize.models = Object.fromEntries(capsEntries); // Crea un nuevo objeto de modelos con nombres capitalizados

// Desestructura los modelos definidos para facilitar el acceso
const { User, Car, ServiceOrder, Category, ProductService } = sequelize.models;

// Definición de relaciones entre modelos
// Un Usuario puede tener muchas Órdenes de Servicio
User.hasMany(ServiceOrder, { foreignKey: 'id_User' });
// Una Orden de Servicio pertenece a un Usuario
ServiceOrder.belongsTo(User, { foreignKey: 'id_User' });

// Un Carro puede tener muchas Órdenes de Servicio
Car.hasMany(ServiceOrder, { foreignKey: 'id_Car' });
// Una Orden de Servicio pertenece a un Carro
ServiceOrder.belongsTo(Car, { foreignKey: 'id_Car' });

// Una Categoría puede tener muchos Productos o Servicios
Category.hasMany(ProductService, { foreignKey: 'id_Category' });
// Un Producto o Servicio pertenece a una Categoría
ProductService.belongsTo(Category, { foreignKey: 'id_Category' });

// Exporta los modelos y la conexión a la base de datos para su uso en otras partes de la aplicación
module.exports = {
  ...sequelize.models,
  sequelize
};
