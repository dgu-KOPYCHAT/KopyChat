'use strict';
const {
  Model
} = require('sequelize_b');
module.exports = (sequelize_b, DataTypes) => {
  class result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  result.init({
    num: DataTypes.INTEGER,
    bool: DataTypes.STRING,
    result: DataTypes.STRING,
    nickname: DataTypes.STRING
  }, {
    sequelize_b,
    modelName: 'result',
  });
  return result;
};