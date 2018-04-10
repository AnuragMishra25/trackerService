const visitorHistoryRepository = require('../repositories/visitor_history_repository');

async function getVisitorHistoryById(id) {
    const visitorHistory = await visitorHistoryRepository.getVisitorHistoryById(1);
    return visitorHistory;
}

module.exports = {
    getVisitorHistoryById
}