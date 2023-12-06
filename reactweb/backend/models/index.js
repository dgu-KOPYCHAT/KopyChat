'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const config_board= require(__dirname + '/../config/config_board.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Initialize the second database connection
let sequelize_board;
if (config_board.use_env_variable) {
  sequelize_board = new Sequelize(process.env[config_board.use_env_variable], config_board);
} else {
  sequelize_board = new Sequelize(config_board.database, config_board.username, config_board.password, config_board);
}


fs
  .readdirSync(__dirname+'/login')
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/login', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
fs
  .readdirSync(__dirname+'/board')
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/board', file))(sequelize_board, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize=sequelize;
db.sequelize_board=sequelize_board;
db.Sequelize=Sequelize;

module.exports = db;
