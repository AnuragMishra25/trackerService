const emailRepository = require('../repositories/email_repository');

async function getEmailDataById(id) {
    const email = await emailRepository.getEmailDataById(1);
    return email;
}

module.exports = {
    getEmailDataById
}