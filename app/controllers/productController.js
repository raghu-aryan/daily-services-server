const db = require("../models");
const Product = db.Product;

module.exports = {
  store: async (req, res) => {
    try {
      const { title, description = '' } = req.body;
      const productExit = await Product.findOne({ where: { title } });
      if(!title) {
        throw new Error('Title is required');
      }
      console.log(productExit, 'productExitproductExit');
      if(productExit) {
        throw new Error(`Product ${productExit} already exist`);
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