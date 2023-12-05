'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num: {
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      explain: {
        type: Sequelize.STRING
      },
      limitation: {
        type: Sequelize.STRING
      },
      input: {
        type: Sequelize.STRING
      },
      output: {
        type: Sequelize.STRING
      },
      test_input1: {
        type: Sequelize.STRING
      },
      test_input2: {
        type: Sequelize.STRING
      },
      test_input3: {
        type: Sequelize.STRING
      },
      test_output1: {
        type: Sequelize.STRING
      },
      test_output2: {
        type: Sequelize.STRING
      },
      test_output3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question');
  }
};