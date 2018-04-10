const directRepository = require('../repositories/direct_repository');

async function getDirectById(id) {
    const direct = await directRepository.getDirectById(id);
    return direct;
}

async function getDirectData(params) {
    const direct = await directRepository.getDirectData(params);
    return direct;
}

module.exports = {
    getDirectById,
    getDirectData
}