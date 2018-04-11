module.exports = function (sequelize, DataTypes) {
    return sequelize.define('productUsers', {
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
        domainPage: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'domain_page',
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
            tableName: 'product_users',
        })
}