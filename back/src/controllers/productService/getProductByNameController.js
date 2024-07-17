const { ProductService } = require('../../config/db'); // Importar el modelo ProductService desde la configuración de la base de datos
const { Op } = require('sequelize'); // Importar operadores de Sequelize

const normalizeString = (str) => {
  return str
    .toLowerCase() // Convertir a minúsculas
    .normalize('NFD') // Normalizar la cadena
    .replace(/[\u0300-\u036f]/g, ''); // Eliminar acentos
};

const getProductByNameController = async (name) => {
  const normalizedSearchName = normalizeString(name);

  const products = await ProductService.findAll({
    where: {
      Name: {
        [Op.iLike]: `%${normalizedSearchName}%`, // Usar operador iLike para búsqueda insensible a mayúsculas/minúsculas
      },
    },
  });

  if (products.length === 0) {
    throw new Error('No se encontraron productos.');
  }

  return products;
};

module.exports = getProductByNameController;
