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
            type: DataTypes.JSON,
            allowNull: true,
            field: 'data',
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
            tableName: 'visitor_history',
        })
}