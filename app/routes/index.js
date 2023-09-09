const rootRouter = require("express").Router();

const productRoutes = require('./product')
const userRoutes = require('./user')
const mobileUserRouter = require("./mobile/user")

rootRouter.use('/admin/users/', userRoutes);
rootRouter.use('/admin/products', productRoutes);

rootRouter.use('/mobile/users', mobileUserRouter);
module.exports = rootRouter;