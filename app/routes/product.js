const productRouter = require("express").Router();
const productController = require('../controllers/admin/productController.js')

productRouter.get("/", productController.getAll);
productRouter.get("/published", productController.getAllActive);
productRouter.post("/", productController.store);
productRouter.get("/:id", productController.getOne);
productRouter.put("/:id", productController.updateOne);
productRouter.delete("/:id", productController.destroyOne);
module.exports = productRouter;
