const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize para definir los tipos de datos de los modelos

module.exports = (sequelize) => {
  // Define el modelo 'ServiceOrder' en Sequelize
  sequelize.define(
    "ServiceOrder", 
        {
            id_Service_Order: {
              type: DataTypes.UUID, // Define el tipo de dato como UUID
              primaryKey: true, // Establece que este campo es la clave primaria
              defaultValue: DataTypes.UUIDV4, // Configura el valor por defecto como UUID v4
            },
            id_User: {
              type: DataTypes.UUID,
              allowNull: false,
              references: {
                model: 'Users',
                key: 'id_User',
              },
            },
            id_Car: {
              type: DataTypes.UUID,
              allowNull: false,
              references: {
                model: 'Cars',
                key: 'id_Car',
              },
            },
            Date: {
              type: DataTypes.DATE, // Define el tipo de dato como fecha
              allowNull: false, // Establece que este campo es obligatorio
            },
            PaymentMethod: {
              type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
              allowNull: true, // Establece que este campo es opcional
            },
            Items: {
              type: DataTypes.JSON, // Define el tipo de dato como JSON para almacenar productos con cantidad, referencia y precio
              allowNull: false, // Establece que este campo es obligatorio
            },
            Warnings: {
              type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
              allowNull: true, // Establece que este campo es opcional
            },
            id_User: {
              type: DataTypes.UUID,
              allowNull: false
            },
            id_Car: {
              type: DataTypes.UUID,
              allowNull: false
            }
        }, 
    {timestamps: false }// Desactiva los campos createdAt y updatedAt
  );
};