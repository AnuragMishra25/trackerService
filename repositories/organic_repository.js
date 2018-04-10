const Models = require('../models/index');

const sequelize = Models.sequelize;

const Organic = Models.organic;
const organicAttributes = require('../attributes/organic');

async function getOrganicDataById(id) {
    const result = await Organic.findById(id,
        { attributes: organicAttributes });
    return result;
}

module.exports = {
    getOrganicDataById
}