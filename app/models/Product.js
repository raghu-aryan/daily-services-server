module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  
    return Product;
  };
  