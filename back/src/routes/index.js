const { Router } = require("express");
const carRouter = require("./carRouter");
const router = Router();

router.use("/cars", carRouter);

module.exports = router;