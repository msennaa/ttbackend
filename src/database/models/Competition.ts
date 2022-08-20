import { Model, DataTypes} from "sequelize";
import db from '.';
import Competitor from "./Competitor";

export default class Competition extends Model {
  id!: number;
  competition_name!: string;
  inProgress!: boolean;
}

Competition.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  competitionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'competition',
  timestamps: false,
  underscored: true,
})

Competition.hasMany(Competitor, { foreignKey: 'competition' as 'competicao'})
Competitor.belongsTo(Competition, { foreignKey: 'competition' as 'competicao'})