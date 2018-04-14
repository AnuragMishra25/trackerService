module.exports = function (sequelize, DataTypes) {
    return sequelize.define('facebook', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },
        campaignName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'campaign_name',
        },
        medium: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'medium',
        },
        term: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'term',
        },
        content: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'content',
        },
        visitCounter:{
            type:DataTypes.INTEGER,
            allowNull : true,
            field: 'visit_counter'
        },
        others: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'others',
        },
        domainId:{
            type: DataTypes.BIGINT,
            allowNull: true,
            field: 'domain_id',
        },
        device:{
            type: DataTypes.STRING,
            allowNull: true,
            field: 'device',
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
            tableName: 'facebook',
        })
}