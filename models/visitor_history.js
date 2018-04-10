module.exports = function (sequelize, DataTypes) {
    return sequelize.define('visitorHistory', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        deviceId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'device_id',
        },
        data: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'data',
        }
    }, {
            tableName: 'visitor_history',
        })
}