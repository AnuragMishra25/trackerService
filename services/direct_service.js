const directRepository = require('../repositories/direct_repository');

async function getDirectById(id) {
    const direct = await directRepository.getDirectById(1);
    return direct;
}

module.exports = {
    getDirectById
}