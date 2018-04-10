const Models = require('../models/index');

const sequelize = Models.sequelize;

const Facebook = Models.facebook;
const facebookAttributes = require('../attributes/facebook');

async function getFacebookDataById(id) {
    const result = await Facebook.findById(id,
        { attributes: facebookAttributes });
    return result;
}

module.exports = {
    getFacebookDataById
}