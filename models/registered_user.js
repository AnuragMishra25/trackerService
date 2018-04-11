module.exports = function (sequelize, DataTypes) {
    return sequelize.define('registeredUsers', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'email',
        },
        registeredSource: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'registered_source',
        },
        phoneNumber: {
            type: DataTypes.BIGINT,
            allowNull: true,
            field: 'phone_number',
        },
        history: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'history',
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at'
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        }
    }, {
            tableName: 'registered_users',
        })
}