const { Router } = require("express");
const carRouter = require("./carRouter");
const productServiceRouter = require("./productServiceRouter");
const userRouter = require("./userRoutes");
const orderRouter = require("./orderRoutes")
const router = Router();

// Agrega las rutas de carro a la ruta principal
router.use("/cars", carRouter);
// Agrega las rutas de producto a la ruta principal
router.use("/products", productServiceRouter);
// Agrega las rutas de usuario a la ruta principal
router.use("/users", userRouter);
// Agrega las rutas de orden de servicio a la ruta principal
router.use("/orders", orderRouter);

module.exports = router;