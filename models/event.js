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
    static associate({ Stage, Stage_events }) {
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages',
        through: Stage_events
      })
    }
    static associate({ Meet_greets }) {
       Event.belongsToMany(Meet_greets, {
        foreignKey: 'event_id',
        as: 'event',
       })
    }
    static associate({ Set_times }) {
      Event.belongsToMany(Set_times, {
        foreignKey: 'event_id',
        as: 'set times',
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