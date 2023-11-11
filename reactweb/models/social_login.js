'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class social_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  social_login.init({
    type: DataTypes.STRING,
    sns_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'social_login',
  });
  return social_login;
};