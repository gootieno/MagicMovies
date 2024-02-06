// models/movie.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // associations can be defined here
      Movie.hasMany(models.Question, { foreignKey: 'movieId' });
    }
  }
  Movie.init({
    title: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    genre: DataTypes.STRING(50),
    releaseDate: {
      type: DataTypes.DATE,
      field: 'release_date'
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      field: 'image_url'
    },
    status: DataTypes.ENUM('upcoming', 'now showing', 'archive')
  }, {
    sequelize,
    modelName: 'Movie',
    timestamps: true,
    underscored: true
  });
  return Movie;
};
