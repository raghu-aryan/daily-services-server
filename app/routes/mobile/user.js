const mobileUserRouter = require("express").Router();
const userAuthController = require("../../controllers/mobile/authController")

mobileUserRouter.post("/signUpWithMobile", userAuthController.signUpWithMobile);
mobileUserRouter.post("/verifyOTP", userAuthController.verifyOTP);
module.exports = mobileUserRouter;
