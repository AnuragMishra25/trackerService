const visitorHistoryRepository = require('../repositories/visitor_history_repository');
const fbRepository = require('../repositories/facebook_repository');
const googleRepository = require('../repositories/google_repository');
const directRepository = require('../repositories/direct_repository');
const emailRepository = require('../repositories/email_repository');
const organicRepository = require('../repositories/organic_repository');


const Models = require('../models/index');
const sequelize = Models.sequelize;

async function getVisitorHistoryById(id) {
    const visitorHistory = await visitorHistoryRepository.getVisitorHistoryById(1);
    return visitorHistory;
}

async function createVisitorHistory(data) {
    const transaction = await sequelize.transaction();
    try {
        const newvisitorHistory = await visitorHistoryRepository
            .createVisitorHistory(data, transaction);
        console.log(data);
        switch (data.data.source) {
            case 'facebook':
                await fbRepository.createFacebookEntry(data.data, transaction);
                break;
            case 'google':
                await googleRepository.createGoogleEntry(data.data, transaction);
                break;
            case 'email':
                await emailRepository.createEmailEntry(data.data, transaction);
                break;
            case 'organic':
                await organicRepository.createOrganicEntry(data.data, transaction);
                break;
            case 'direct':
                await directRepository.createDirectEntry(data.data, transaction);
                break;
        }
        await transaction.commit();
        return newvisitorHistory.id;
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}

module.exports = {
    getVisitorHistoryById,
    createVisitorHistory
}