const emailRepository = require('../repositories/email_repository');

async function getEmailDataById(id) {
    const email = await emailRepository.getEmailDataById(id);
    return email;
}

async function getEmailData(params) {
    const email = await emailRepository.getEmailData(params);
    return email;
}

module.exports = {
    getEmailDataById,
    getEmailData
}