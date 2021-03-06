const Models = require('../models/index');

const sequelize = Models.sequelize;
const Op = sequelize.Op;
const Email = Models.email;
const emailAttributes = require('../attributes/email');

async function getEmailDataById(id) {
    const result = await Email.findById(id,
        { attributes: emailAttributes });
    return result;
}

async function getEmailData(params) {
    let pageSize = +params.pageSize;
    let currentPage = params.currentPage;
    let sortColumn = params.sortColumn;
    let searches = [];
    searches.push({ key: params.searchColumn, value: params.search });
    let sortExp = sortColumn.split(',');
    let orObject = [];
    console.log(searches);
    for (let i = 0; i < searches.length; i++) {
        let some = searches[i].key;
        let value = searches[i].value;
        if(some ==''){
            break;
        }
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
                        [Op.eq]: +searches[i].value
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
    const result = await Email.findAndCountAll({
        where: {
            [Op.and]: orObject
        },
        limit: pageSize,
        offset: start,
        order: [sortExp]
    });
    return result;
}

async function createEmailEntry(data, transaction) {
    let obj = {};
    obj.medium = data.medium;
    obj.campaignName = data.campaign;
    obj.term = data.term;
    obj.content = data.content;
    obj.others = data.others == undefined ? null : data.others;
    obj.visitCounter = data.visitCounter;
    obj.device = data.device;
    obj.domainId = data.domainId;

    const tempData = Object.assign({}, obj, {
        createdAt: new Date(),
        updatedAt: null,
    });
    return Email.create(tempData, { transaction });
}

module.exports = {
    getEmailDataById,
    getEmailData,
    createEmailEntry
}