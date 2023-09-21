const { Product } = require("../../models");

module.exports = {
  store: async (req, res) => {
    try {
      const { title, description = '' } = req.body;
      if (!title) {
        res.status(400).send({
          status: false,
          error: "Title can not be empty!"
        });
        return;
      }
      const productExit = await Product.findOne({ where: { title } });
      if (productExit) {
        res.status(400).send({
          status: false,
          error: `Product ${productExit?.title} already exist`
        });
        return;
      }
      const newProduct = await Product.create({
        title, description
      })
      res.json({ status: true, data: newProduct })
    } catch (error) {
      res.status(400).send({
        status: false,
        error: error
      });
      return;
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
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).send({
          message: "Id can not be empty!"
        });
        return;
      }
      const product = await Product.findByPk(id);
      res.json({ status: true, data: product });
    } catch (error) {
      return error
    }
  },

  updateOne: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).send({
          message: "Id can not be empty!"
        });
        return;
      }
      const product = await Product.findByPk(id);
      if (!product) {
        res.status(400).send({
          message: `Product not exist`
        });
        return;
      }
      product.title = 'update to date';
      const updateProduct = await product.save();
      res.json({ status: true, data: updateProduct });
    } catch (error) {
      return error;
    }
  },

  destroyOne: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        res.status(400).send({
          message: "Id can not be empty!"
        });
        return;
      }
      await User.destroy({
        id: id
      });
      res.json({ status: true, data: id });
    } catch (error) {
      return error;
    }
  }
}