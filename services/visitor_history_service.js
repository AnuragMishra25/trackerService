const visitorHistoryRepository = require('../repositories/visitor_history_repository');
const fbRepository = require('../repositories/facebook_repository');
const googleRepository = require('../repositories/google_repository');
const directRepository = require('../repositories/direct_repository');
const emailRepository = require('../repositories/email_repository');
const organicRepository = require('../repositories/organic_repository');
const domainRepository = require('../repositories/domain_repository');


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
        const domain = await domainRepository.getDomainByText(data.domain, transaction);
        let tempData = data.data;
        tempData.device = data.device;
        await transaction.commit();
        if (domain == null) {
            tempData.domainId = '';
        }else{
            tempData.domainId = domain.rows[0].id;
        }
        const transaction2 = await sequelize.transaction();
        switch (data.data.source) {
            case 'facebook':
                await fbRepository.createFacebookEntry(tempData, transaction2);
                break;
            case 'google':
                await googleRepository.createGoogleEntry(tempData, transaction2);
                break;
            case 'email':
                await emailRepository.createEmailEntry(tempData, transaction2);
                break;
            case 'organic':
                await organicRepository.createOrganicEntry(tempData, transaction2);
                break;
            case 'direct':
                await directRepository.createDirectEntry(tempData, transaction2);
                break;
        }
        await transaction2.commit();
        return newvisitorHistory.id;
    } catch (error) {
        await transaction.rollback();
        await transaction2.rollback();
        throw error;
    }
}

module.exports = {
    getVisitorHistoryById,
    createVisitorHistory
}