const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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
