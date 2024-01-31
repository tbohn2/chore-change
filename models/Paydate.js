const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Paydate extends Model { }
Paydate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        child_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'child',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Paydate',
    }
);

module.exports = Paydate;
