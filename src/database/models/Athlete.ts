import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Athlete extends Model {
  id!: number;
  athlete!: string;
  value!: string;
  unity!: string;
  competition!: number;
}

Athlete.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  athlete: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  competition: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'athletes',
  timestamps: false,
  underscored: true,
})