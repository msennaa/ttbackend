"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Competitor_1 = __importDefault(require("./Competitor"));
class Competition extends sequelize_1.Model {
}
exports.default = Competition;
Competition.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    competitionName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    inProgress: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'competition',
    timestamps: false,
    underscored: true,
});
Competition.hasMany(Competitor_1.default, { foreignKey: 'competition' });
Competitor_1.default.belongsTo(Competition, { foreignKey: 'competition' });
