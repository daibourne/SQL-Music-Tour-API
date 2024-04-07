'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bands extends Model {
    static associate({ Meet_greet, Set_time }) {
      bands.hasMany(Meet_greet, {
        foreignKey: 'band_id',
        as: 'Meet_greet'
      })
      bands.hasMany(Set_time, {
        foreignKey: 'band_id',
        as: 'Set_time'
      })
  }
}
  bands.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Band',
    tableNmae: 'bands',
    timestamps: false,
  });
  return bands;
};