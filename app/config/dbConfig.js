module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "raghuarn",
  DB: "new-app",
  dialect: "postgres",
  PORT: 5435,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
