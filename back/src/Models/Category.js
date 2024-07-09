const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize para definir los tipos de datos de los modelos

module.exports = (sequelize) => {
  // Define el modelo 'Category' en Sequelize
  sequelize.define(
    "Category", 
    {
        id_Category: {
            type: DataTypes.UUID, // Define el tipo de dato como UUID
            primaryKey: true, // Establece que este campo es la clave primaria
            defaultValue: DataTypes.UUIDV4, // Configura el valor por defecto como UUID v4
            },
        Name: {
            type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
            allowNull: false, // Establece que este campo es obligatorio
        },
    }, 
    {timestamps: false,} // Desactiva los campos createdAt y updatedAt
  );
};
