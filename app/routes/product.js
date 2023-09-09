const productRouter = require("express").Router();
const productController = require('../controllers/admin/productController.js')

productRouter.get("/", productController.getAll);
productRouter.get("/published", productController.getAllActive);
productRouter.post("/", productController.store);

module.exports = productRouter;
