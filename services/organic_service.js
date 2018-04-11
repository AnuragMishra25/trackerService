const organicRepository = require('../repositories/organic_repository');

async function getOrganicDataById(id) {
    const organic = await organicRepository.getOrganicDataById(id);
    return organic;
}

async function getOrganicData(params) {
    const organic = await organicRepository.getOrganicData(params);
    return organic;
}

module.exports = {
    getOrganicDataById,
    getOrganicData
}