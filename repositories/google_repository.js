const Models = require('../models/index');

const sequelize = Models.sequelize;

const Google = Models.google;
const googleAttributes = require('../attributes/google');

async function getGoogleDataById(id) {
    const result = await Google.findById(id,
        { attributes: googleAttributes });
    return result;
}

module.exports = {
    getGoogleDataById
}