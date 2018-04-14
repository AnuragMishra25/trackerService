const domainRepository = require('../repositories//domain_repository');
const Models = require('../models/index');
const sequelize = Models.sequelize;

async function getDomainById(id) {
    const direct = await domainRepository.getDomainById(id);
    return direct;
}

async function getDomainByText(text) {
    const direct = await domainRepository.getDomainByText(text);
    return direct;
}

async function getDomainByUser(user) {
    const direct = await domainRepository.getDomainByUser(user);
    return direct;
}

async function createDomainEntry(data) {
    const transaction = await sequelize.transaction();
    try {
        const domain = await domainRepository.createDomainEntry(data, transaction);
        await transaction.commit();
        return domain.id;
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}

module.exports = {
    getDomainById,
    getDomainByText,
    getDomainByUser,
    createDomainEntry
}