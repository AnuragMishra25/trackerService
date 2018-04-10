const Models = require('../models/index');

const sequelize = Models.sequelize;

const Direct = Models.direct;
const directAttributes = require('../attributes/direct');

async function getDirectById(id) {
    const result = await Direct.findById(id,
        { attributes: directAttributes });
    return result;
}

module.exports = {
    getDirectById
}