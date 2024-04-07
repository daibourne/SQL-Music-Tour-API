'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band }) {
      Set_time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })
    } 
    static associate({ Event }) {
      Set_time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'set times',
      })
    }
    static associate({ Stage }) {
      Set_time.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'set times',
      })
    }
  }
  Set_time.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    set_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'Set_time',
    timestamps: false,
  });
  return Set_time;
};