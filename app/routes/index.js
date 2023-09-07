const rootRouter = require("express").Router();
const productRoutes = require('./product')
rootRouter.use('/products', productRoutes);
module.exports = rootRouter;