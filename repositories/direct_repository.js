const Models = require('../models/index');

const sequelize = Models.sequelize;
const Op = sequelize.Op;

const Direct = Models.direct;
const directAttributes = require('../attributes/direct');

async function getDirectById(id) {
    const result = await Direct.findById(id,
        { attributes: directAttributes });
    return result;
}

async function getDirectData(params) {
    let pageSize = +params.pageSize;
    let currentPage = params.currentPage;
    let sortColumn = params.sortColumn;
    let searches = [];
    if (params.searchColumn != '' && params.search != '')
        searches.push({ key: params.searchColumn, value: params.search });
    let sortExp = sortColumn.split(',');
    let orObject = [];
    for (let i = 0; i < searches.length; i++) {
        let some = searches[i].key;
        let value = searches[i].value;
        orObject.push({
            [searches[i].key]: {
                [Op.like]: '%'+searches[i].value+'%'
            }
        })
    }
    let start = (pageSize * currentPage) - pageSize;
    const result = await Direct.findAndCountAll({
        where: {
            [Op.and]: orObject
        },
        limit: pageSize,
        offset: start,
        order: [sortExp]
    });
    return result;
}

async function createDirectEntry(data, transaction) {
    let obj = {};
    obj.medium = data.medium;
    obj.campaignName = data.campaign;
    obj.term = data.term;
    obj.content = data.content;
    obj.others = data.others == undefined ? null : data.others;
    obj.visitCounter = data.visitCounter;

    const tempData = Object.assign({}, obj, {
        createdAt: new Date(),
        updatedAt: null,
    });
    return Direct.create(tempData, { transaction });
}

module.exports = {
    getDirectById,
    getDirectData,
    createDirectEntry
}