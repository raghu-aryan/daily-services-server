const dbConfig = require("../config/dbConfig.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const User = require("./User.js")(sequelize);
const Product = require("./Product.js")(sequelize);
//const UserProduct = require("./UserProduct.js")(sequelize);
User.hasMany(Product);
Product.belongsTo(User);
//UserProduct.hasOne(User);
//UserProduct.hasOne(Product);

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  User,
  Product,
  //UserProduct: require("./UserProduct.js")(sequelize),
}
