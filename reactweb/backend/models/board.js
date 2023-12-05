'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize_b, DataTypes) => {
  class board extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  board.init({
    num: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {
    sequelize_b,
    modelName: 'board',
  });
  return board;
};