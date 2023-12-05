'use strict';
const {
  Model
} = require('sequelize_b');
module.exports = (sequelize_b, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  question.init({
    num: DataTypes.INTEGER,
    title: DataTypes.STRING,
    explain: DataTypes.STRING,
    nickname: DataTypes.STRING,
    limitation: DataTypes.STRING,
    input: DataTypes.STRING,
    output: DataTypes.STRING,
    test_input1: DataTypes.STRING,
    test_input2: DataTypes.STRING,
    test_input3: DataTypes.STRING,
    test_output1: DataTypes.STRING,
    test_output2: DataTypes.STRING,
    test_output3: DataTypes.STRING
  }, {
    sequelize_b,
    modelName: 'question',
  });
  return question;
};