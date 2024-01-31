const Parent = require('./Parent');
const Child = require('./Child');
const Chore = require('./Chore');
const Paydate = require('./Paydate');

Parent.hasMany(Child, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE'
});

Child.belongsTo(Parent, {
    foreignKey: 'parent_id'
});

Parent.hasMany(Chore, {
    foreignKey: 'parent_id',
    onDelete: 'CASCADE'
});

Chore.belongsTo(Parent, {
    foreignKey: 'parent_id'
});

Child.hasMany(Chore, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE'
});

Chore.belongsTo(Child, {
    foreignKey: 'child_id'
});

Child.hasMany(Paydate, {
    foreignKey: 'child_id',
    onDelete: 'CASCADE'
});

Paydate.belongsTo(Child, {
    foreignKey: 'child_id'
});

module.exports = { Parent, Child, Chore, Paydate };