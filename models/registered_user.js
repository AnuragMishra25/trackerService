module.exports = function () {
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
            type: DataTypes.STRING,
            allowNull: true,
            field: 'history',
        }
    }, {
            tableName: 'registered_users',
        })
}