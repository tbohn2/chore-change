const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chore extends Model { }

Chore.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        chore: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        child_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'child',
                key: 'id',
            },
        },
        parent_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'parent',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'chore',
    }
);

module.exports = Chore;