const { DataTypes } = require('sequelize'); // Importa DataTypes de Sequelize para definir los tipos de datos de los modelos

module.exports = (sequelize) => {
  // Define el modelo 'User' en Sequelize
    sequelize.define(
        "User", 
        {
            id_User: {
                type: DataTypes.UUID, // Define el tipo de dato como UUID
                primaryKey: true, // Establece que este campo es la clave primaria
                defaultValue: DataTypes.UUIDV4, // Configura el valor por defecto como UUID v4
            },
            Rol: {
                type: DataTypes.BOOLEAN, // Define el tipo de dato como booleano
                allowNull: false, // Establece que este campo es obligatorio
            },
            Name: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            Mail: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: false, // Establece que este campo es obligatorio
            },
            Password: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: true, // Establece que este campo es obligatorio
            },
            Phone: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: true, // Establece que este campo es opcional
            },
            Image: {
                type: DataTypes.STRING, // Define el tipo de dato como cadena de texto
                allowNull: true, // Establece que este campo es opcional
            },
            Active: {
                type: DataTypes.BOOLEAN, // Define el tipo de dato como booleano
                allowNull: false, // Establece que este campo es obligatorio
                defaultValue: true, // Configura el valor por defecto como verdadero
            },
        }, 
        {timestamps: false,} // Desactiva los campos createdAt y updatedAt  
    );
};
