"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserAnswers", {
      answer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      session_id: {
        type: Sequelize.INTEGER,
        references: { model: "GameSessions", key: "session_id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: { model: "Questions", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      selected_option_id: {
        type: Sequelize.INTEGER,
        references: { model: "Options", key: "option_id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      answered_correctly: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      answered_on: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserAnswers");
  },
};
