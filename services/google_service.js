const googleRepository = require('../repositories/google_repository');

async function getGoogleDataById(id) {
    const google = await googleRepository.getGoogleDataById(1);
    return google;
}

async function getGoogleData(params) {
    const google = await googleRepository.getGoogleData(params);
    return google;
}

module.exports = {
    getGoogleDataById,
    getGoogleData
}