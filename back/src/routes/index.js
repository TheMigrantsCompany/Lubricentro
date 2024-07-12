const { Router } = require("express");
const carRouter = require("./carRouter");
const productServiceRouter = require("./productServiceRouter");
const router = Router();

// Agrega las rutas de carro a la ruta principal
router.use("/cars", carRouter);
// Agrega las rutas de producto a la ruta principal
router.use("/products", productServiceRouter);

module.exports = router;