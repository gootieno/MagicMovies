// models/gamesession.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GameSession extends Model {
    static associate(models) {
      // associations can be defined here
      GameSession.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  GameSession.init({
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    playedOn: {
      type: DataTypes.DATE,
      field: 'played_on'
    },
    completedOn: {
      type: DataTypes.DATE,
      field: 'completed_on'
    }
  }, {
    sequelize,
    modelName: 'GameSession',
    timestamps: true,
    underscored: true
  });
  return GameSession;
};
