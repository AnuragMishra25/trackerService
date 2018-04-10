const registeredUserRepository = require('../repositories/registered_user_repository');

async function getRegisteredUserById(id) {
    const registeredUser = await registeredUserRepository.getRegisteredUserById(1);
    return registeredUser;
}

module.exports = {
    getRegisteredUserById
}