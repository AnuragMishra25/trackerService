const Models = require('../models/index');

const sequelize = Models.sequelize;

const Email = Models.email;
const emailAttributes = require('../attributes/email');

async function getEmailDataById(id) {
    const result = await Email.findById(id,
        { attributes: emailAttributes });
    return result;
}

module.exports = {
    getEmailDataById
}