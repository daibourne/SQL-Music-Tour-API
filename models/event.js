'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Stage, Stage_event }) {
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stage',
        through: Stage_event
      })
    }
    static associate({ Meet_greet }) {
       Event.hasMany(Meet_greet, {
        foreignKey: 'event_id',
        as: 'Event',
       })
    }
    static associate({ Set_time }) {
      Event.hasMany(Set_time, {
        foreignKey: 'event_id',
        as: 'Set_time',
      })
    }
  }
  Event.init({
    Event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
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
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Event',
    timestamps: false,
  });
  return Event;
};