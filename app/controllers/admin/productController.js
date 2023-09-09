const {Product} = require("../../models");

module.exports = {
  store: async (req, res) => {
    try {
      const { title, description = '' } = req.body;
      if (!title) {
        res.status(400).send({
          message: "Title can not be empty!"
        });
        return;
      }
      const productExit = await Product.findOne({ where: { title } });
      if (productExit) {
        res.status(400).send({
          message: `Product ${productExit?.title} already exist`
        });
        return;
      }
      const newProduct = Product.create({
        title, description
      })
      res.json({ status: true, data: newProduct })
    } catch (error) {
      throw error;
    }
  },

  getAll: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json({ status: true, data: products });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getAllActive: async (req, res) => {
    try {
      const activeProducts = Product.findAll({ where: { published: true } })
      res.json({ status: true, data: activeProducts });
    } catch (error) {
      throw error;
    }
  }
}