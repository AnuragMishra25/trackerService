const Models = require('../models/index');

const sequelize = Models.sequelize;

const RegisteredUsers = Models.registeredUsers;
const registeredUserAttributes = require('../attributes/registered_user');

async function getRegisteredUserById(id) {
    const result = await RegisteredUsers.findById(id,
        { attributes: registeredUserAttributes });
    return result;
}

module.exports = {
    getRegisteredUserById
}