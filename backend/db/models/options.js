// models/option.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate(models) {
      // associations can be defined here
      Option.belongsTo(models.Question, { foreignKey: 'questionId' });
    }
  }
  Option.init({
    questionId: DataTypes.INTEGER,
    optionText: {
      type: DataTypes.STRING(255),
      field: 'option_text'
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      field: 'is_correct'
    }
  }, {
    sequelize,
    modelName: 'Option',
    timestamps: true,
    underscored: true
  });
  return Option;
};
