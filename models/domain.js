module.exports = function (sequelize, DataTypes) {
    return sequelize.define('domain', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'domain',
        },
        user: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'user',
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at',
        },
    }, {
            tableName: 'domain',
        })
}