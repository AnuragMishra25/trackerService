const Models = require('../models/index');

const sequelize = Models.sequelize;
const Op = sequelize.Op;
const Organic = Models.organic;
const organicAttributes = require('../attributes/organic');

async function getOrganicDataById(id) {
    const result = await Organic.findById(id,
        { attributes: organicAttributes });
    return result;
}

async function getOrganicData(params) {
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
        if (some == 'visitCounter') {
            if (value == '6') {
                orObject.push({
                    [searches[i].key]: {
                        [Op.gt]: 5
                    }
                })
            } else {
                orObject.push({
                    [searches[i].key]: {
                        [Op.eq]: searches[i].value
                    }
                })
            }
        } else {
            orObject.push({
                [searches[i].key]: {
                    [Op.like]: '%' + searches[i].value + '%'
                }
            })
        }
    }
    let start = (pageSize * currentPage) - pageSize;
    const result = await Organic.findAndCountAll({
        where: {
            [Op.and]: orObject
        },
        limit: pageSize,
        offset: start,
        order: [sortExp]
    });
    return result;
}

async function createOrganicEntry(data, transaction) {
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
    return Organic.create(tempData, { transaction });
}

module.exports = {
    getOrganicDataById,
    getOrganicData,
    createOrganicEntry
}