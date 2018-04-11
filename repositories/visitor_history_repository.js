const Models = require('../models/index');

const sequelize = Models.sequelize;

const VisitorHistory = Models.visitorHistory;
const visitorHistoryAttributes = require('../attributes/visitor_history');

async function getVisitorHistoryById(id) {
    const result = await VisitorHistory.findById(id,
        { attributes: visitorHistoryAttributes });
    return result;
}

async function createVisitorHistory(data, transaction) {
    const tempData = Object.assign({}, data, {
        createdAt: new Date(),
        updatedAt: null,
    });
    return VisitorHistory.create(tempData, { transaction });
}

module.exports = {
    getVisitorHistoryById,
    createVisitorHistory,
}