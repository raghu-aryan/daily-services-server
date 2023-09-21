const { DataTypes } = require("sequelize");
const { User, Product } = require("../models");

module.exports = (sequelize) => {
  const UserProduct = sequelize.define("user_product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        field: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        field: 'id',
      },
    },
    published: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  // UserProduct.belongsTo(User, {
  //   foreignKey: 'user_id',
  // });
  // UserProduct.belongsTo(Product, {
  //   foreignKey: 'product_id',
  // });

  return UserProduct;
};
