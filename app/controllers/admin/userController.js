const { User } = require("../../models");

module.exports = {
  store: async (req, res) => {
    try {
      const { mobile } = req.body;
      if (!mobile) {
        res.status(400).send({
          message: "mobile can not be empty!"
        });
        return;
      }
      // if (!password) {
      //   res.status(400).send({
      //     message: "Password can not be empty!"
      //   });
      //   return;
      // }
      const userExit = await User.findOne({ where: { mobile } });
      if (userExit) {
        res.status(400).send({
          message: `Product ${userExit?.mobile} already exist`
        });
        return;
      }
      const newUser = User.create({
        mobile
      })
      res.json({ status: true, data: newUser })
    } catch (error) {
      throw error;
    }
  },

  getAll: async (req, res) => {
    try {
      const products = await User.findAll();
      res.json({ status: true, data: products });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getAllActive: async (req, res) => {
    try {
      const activeProducts = User.findAll({ where: { published: true } })
      res.json({ status: true, data: activeProducts });
    } catch (error) {
      throw error;
    }
  }
}