const Sequelize = require('sequelize')

const db_uri = process.env.DB_URI

const sequelize = new Sequelize(db_uri);
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.incidents = require("../models/Incidents")(sequelize, Sequelize);
  
  module.exports = db;