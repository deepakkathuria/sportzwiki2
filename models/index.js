const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  logging: false,
  define: {
    freezeTableName: true
  },
  pool: config.pool
});


const db = {
    Sequelize,
    sequelize,
    post: require("../models/post.model.js")(sequelize, Sequelize),
  };


  module.exports = db;