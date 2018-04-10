const organicRepository = require('../repositories/organic_repository');

async function getOrganicDataById(id) {
    const organic = await organicRepository.getOrganicDataById(1);
    return organic;
}

module.exports = {
    getOrganicDataById
}