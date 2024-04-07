'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, Stage_event}) {
      Stage.belongsToMany(Event, {
        foreignKey: 'stage_id',
        as: 'Event',
        through: Stage_event
      })
    }
    static associate({ Set_time }) {
      Stage.hasMany(Set_time, {
        foreignKey: 'stage_id',
        as: 'Set_time',
      })
    }
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
  },
    stage_name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'Stage',
    timestamps: false
  });
  return Stage;
};