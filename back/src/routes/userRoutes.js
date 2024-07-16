const { Router } = require("express");
const postUserHandler = require("../handlers/userHandlers/postUserHandler");
const getAllUsersHandler = require("../handlers/userHandlers/getAllUsersHandler");
const getUserByIdHandler = require("../handlers/userHandlers/getUserByIdHandler");
const toggleUserActiveStateHandler = require("../handlers/userHandlers/toggleUserActiveHandler");
const syncUsersHandler = require("../handlers/userHandlers/syncUsersHandler");
const putUserHandler = require("../handlers/userHandlers/putUserHandler");
const deleteUserByIdHandler = require("../handlers/userHandlers/deleteUserByIdHandler")

const userRouter = Router();

userRouter.post("/", postUserHandler);
userRouter.put("/put/:id", putUserHandler);
userRouter.get("/", getAllUsersHandler);
userRouter.get("/:id", getUserByIdHandler);
userRouter.patch("/:id/toggle", toggleUserActiveStateHandler);
userRouter.post('/sync', syncUsersHandler);
userRouter.delete("/:id", deleteUserByIdHandler);

module.exports = userRouter;