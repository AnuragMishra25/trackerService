const facebookRepository = require('../repositories/facebook_repository');

async function getFacebookDataById(id) {
    const facebook = await facebookRepository.getFacebookDataById(1);
    return facebook;
}

module.exports = {
    getFacebookDataById
}