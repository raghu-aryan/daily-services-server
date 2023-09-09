const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Product;
};
