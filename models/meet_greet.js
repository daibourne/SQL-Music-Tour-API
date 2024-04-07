'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band }) {
      Meet_greet.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'bands'
      })
    }
    static associate({ Event }) {
      Meet_greet.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'Event',
      }) 
    }
  }
  Meet_greet.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    meet_greet_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'Meet_greet',
    timestamps: false
  });
  return Meet_greet;
};