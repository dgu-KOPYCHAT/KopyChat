'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const databases=Object.keys(config.databases);

for (let i=0; i<databases.length; i++) {
  const database=databases[i];
  const dbPath=config.databases[database];
  const sequelize = new Sequelize(dbPath.database, dbPath.username, dbPath.password, dbPath);
  db[database]= sequelize;
}
/*
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Initialize the second database connection
let sequelize_kopy;
const config_kopy = require(__dirname + '/../config/config.json')['development_kopy']; // Assuming 'development_kopy' is always used for the second DB
if (config_kopy.use_env_variable) {
  sequelize_kopy = new Sequelize(process.env[config_kopy.use_env_variable], config_kopy);
} else {
  sequelize_kopy = new Sequelize(config_kopy.database, config_kopy.username, config_kopy.password, config_kopy);
}
*/

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    //const model = db.login_db.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

  fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    //const model = db.board_db.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize=db['login_db'];
db.sequelize_b=db['board_db'];
db.Sequelize=Sequelize;

/*
db.sequelize = sequelize;
db.sequelize_kopy = sequelize_kopy; // Add the second Sequelize instance to the db object
db.Sequelize = Sequelize;
*/

module.exports = db;
