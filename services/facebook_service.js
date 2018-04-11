const facebookRepository = require('../repositories/facebook_repository');

async function getFacebookDataById(id) {
    const facebook = await facebookRepository.getFacebookDataById(id);
    return facebook;
}

async function getFacebookData(params) {
    const facebook = await facebookRepository.getFacebookData(params);
    return facebook;
}

module.exports = {
    getFacebookDataById,
    getFacebookData
}