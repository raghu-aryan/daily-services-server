const userRouter = require("express").Router();
const userController = require('../controllers/admin/userController.js')

userRouter.get("/", userController.getAll);
userRouter.get("/published", userController.getAllActive);
userRouter.post("/", userController.store);

module.exports = userRouter;
