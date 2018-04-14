const Models = require('../models/index');

const sequelize = Models.sequelize;
const Op = sequelize.Op;

const Domain = Models.domain;
const domainAttributes = require('../attributes/domain');

async function getDomainById(id) {
    const result = await Domain.findById(id,
        { attributes: domainAttributes });
    return result;
}

async function getDomainByText(text) {
    let orObject = [];
    orObject.push({
        'domain': {
            [Op.like]: '%' + text + '%'
        }
    })
    const result = await Domain.findAndCountAll({
        where: {
            [Op.and]: orObject
        },
    });
    return result;
}

async function getDomainByUser(user) {
    let orObject = [];
    orObject.push({
        'user': {
            [Op.like]: '%' + text + '%'
        }
    })
    const result = await Domain.findAndCountAll({
        where: {
            [Op.and]: orObject
        },
    });
    return result;
}

async function createDomainEntry(data, transaction) {
    let obj = {};
    obj.domain = data.domain;
    obj.user = data.user;
    const tempData = Object.assign({}, obj, {
        createdAt: new Date(),
        updatedAt: null,
    });
    return Domain.create(tempData, { transaction });
}

module.exports = {
    getDomainById,
    getDomainByText,
    getDomainByUser,
    createDomainEntry
}