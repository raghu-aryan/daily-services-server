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

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  User: require("./User.js")(sequelize),
  Product: require("./Product.js")(sequelize),
}
