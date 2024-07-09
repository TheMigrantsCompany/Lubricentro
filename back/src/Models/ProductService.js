const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize para definir los tipos de datos de los modelos

module.exports = (sequelize) => {
  // Define el modelo 'ProductService' en Sequelize
  sequelize.define(
    "ProductService", 
    {
        id_Product: {
            type: DataTypes.UUID, // Define el tipo de dato como UUID
            primaryKey: true, // Establece que este campo es la clave primaria
            defaultValue: DataTypes.UUIDV4, // Configura el valor por defecto como UUID v4
            },
     
        Name: {
            type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
            allowNull: false, // Establece que este campo es obligatorio
        },
        Quantity: {
            type: DataTypes.INTEGER, // Define el tipo de dato como entero
            allowNull: false, // Establece que este campo es obligatorio
        },
        Reference: {
            type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
            allowNull: true, // Establece que este campo es opcional
        },
        Price_Cl: {
            type: DataTypes.FLOAT, // Define el tipo de dato como número de punto flotante
            allowNull: false, // Establece que este campo es obligatorio
        },
        Price_Cl: {
            type: DataTypes.FLOAT, // Define el tipo de dato como número de punto flotante
            allowNull: true, // Establece que este campo es opcional
        },
    },
    {timestamps: false,}// Desactiva los campos createdAt y updatedAt
);
};
