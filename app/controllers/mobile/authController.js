const jwt = require('jsonwebtoken');
const { User } = require("../../models");

module.exports = {
  signUpWithMobile: async (req, res) => {
    try {
      const { mobile, device = '12541524' } = req.body;
      if (!mobile) {
        res.status(400).send({
          message: "mobile can not be empty!"
        });
        return;
      }
      const userExit = await User.findOne({ where: { mobile } });
      if (userExit) {
        res.status(400).send({
          message: `Product ${userExit?.mobile} already exist`
        });
        return;
      }
      const newUser = await User.create({
        mobile,
        otp: 525210,
        device
      })
      res.json({ status: true, data: newUser })
    } catch (error) {
      throw error;
    }
  },

  verifyOTP: async (req, res) => {
    try {
      const { mobile, otp, device = '7485' } = req.body;
      const user = await User.findOne({ where: { mobile, otp } });
      if (user) {
        await User.update(
          { mobile_verified: true, device }, //otp: ''
          { where: { id: user.id } }
        );
        const token = jwt.sign({id: user.id, mobile: user.mobile }, 'HDSM');
        res.json({ status: true, token, message: 'OTP verified successfully' })
      }
      res.status(400).send({
        message: "Please enter valid OTP"
      });
      return;
    } catch (error) {
      throw error
    }
  }
}