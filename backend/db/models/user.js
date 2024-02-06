// models/user.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here, e.g., User.hasMany(models.GameSession);
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'hashed_password'
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user'
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    underscored: true
  });
  return User;
};
