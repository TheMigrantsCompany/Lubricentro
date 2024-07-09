const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize para definir los tipos de datos de los modelos
const { v4: uuidv4 } = require('uuid'); // Importa la función uuidv4 para generar UUIDs

module.exports = (sequelize) => {
  // Define el modelo 'Car' en Sequelize
  const Car = sequelize.define(
    "Car", {
            id_Car: {
                type: DataTypes.UUID, // Define el tipo de dato como UUID
                primaryKey: true, // Establece que este campo es la clave primaria
                defaultValue: uuidv4, // Genera un valor UUID por defecto
            },
            Name: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            Rol: {
                type: DataTypes.BOOLEAN, // Define el tipo de dato como booleano
                allowNull: false, // Establece que este campo es obligatorio
                defaultValue: false, // Configura el valor por defecto como falso
            },
            CC_NIT: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            QR: {
                type: DataTypes.TEXT, // Define el tipo de dato como texto para almacenar el código QR en base64
                allowNull: true, // Establece que este campo es opcional
            },
            Phone: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            Mail: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            Address: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            Brand: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: true, // Establece que este campo es opcional
            },
            FuelType: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: true, // Establece que este campo es opcional
            },
            KM: {
                type: DataTypes.INTEGER, // Define el tipo de dato como entero
                allowNull: true, // Establece que este campo es opcional
            },
            Model: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: true, // Establece que este campo es opcional
            },
            Active: {
                type: DataTypes.BOOLEAN, // Define el tipo de dato como booleano
                allowNull: false, // Establece que este campo es obligatorio
                defaultValue: true, // Configura el valor por defecto como verdadero
            },
        }, 
        {timestamps: false, }// Desactiva los campos createdAt y updatedAt
  );

  return Car;
};
