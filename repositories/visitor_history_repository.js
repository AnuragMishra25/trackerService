const Models = require('../models/index');

const sequelize = Models.sequelize;

const VisitorHistory = Models.visitorHistory;
const visitorHistoryAttributes = require('../attributes/visitor_history');

async function getVisitorHistoryById(id) {
    const result = await VisitorHistory.findById(id,
        { attributes: visitorHistoryAttributes });
    return result;
}

module.exports = {
    getVisitorHistoryById
}