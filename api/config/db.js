const sequelize = require("sequelize");

const s = new sequelize("ekis", null, null, {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = s; 