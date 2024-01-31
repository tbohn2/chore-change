const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Child extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

Child.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        allowanceRate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            unique: true,
        },
        frequency: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'child',
    }
);

module.exports = Child;
