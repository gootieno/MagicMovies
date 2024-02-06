// models/useranswer.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAnswer extends Model {
    static associate(models) {
      // associations can be defined here
      UserAnswer.belongsTo(models.GameSession, { foreignKey: 'session_id' });
      UserAnswer.belongsTo(models.Question, { foreignKey: 'question_id' });
      UserAnswer.belongsTo(models.Option, { foreignKey: 'selected_option_id' });
    }
  }
  UserAnswer.init({
    sessionId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    selectedOptionId: {
      type: DataTypes.INTEGER,
      field: 'selected_option_id'
    },
    answeredCorrectly: {
      type: DataTypes.BOOLEAN,
      field: 'answered_correctly'
    },
    answeredOn: {
      type: DataTypes.DATE,
      field: 'answered_on'
    }
  }, {
    sequelize,
    modelName: 'UserAnswer',
    timestamps: true,
    underscored: true
  });
  return UserAnswer;
};
