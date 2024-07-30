const path = require('path');

const createProductsFromJson = require('./createProductsFromJson');

const jsonFilePath = path.join(__dirname, '../config/products.json');

createProductsFromJson(jsonFilePath);