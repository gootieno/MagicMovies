// models/question.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      // associations can be defined here
      Question.belongsTo(models.Movie, { foreignKey: 'movieId' });
      Question.hasMany(models.Option, { foreignKey: 'questionId' });
    }
  }
  Question.init({
    movieId: DataTypes.INTEGER,
    questionText: {
      type: DataTypes.TEXT,
      field: 'question_text'
    },
    correctAnswer: {
      type: DataTypes.STRING(255),
      field: 'correct_answer'
    },
    difficulty: DataTypes.ENUM('easy', 'medium', 'hard'),
    scoreValue: {
      type: DataTypes.INTEGER,
      field: 'score_value'
    }
  }, {
    sequelize,
    modelName: 'Question',
    timestamps: true,
    underscored: true
  });
  return Question;
};
