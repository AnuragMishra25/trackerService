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
    let searches = params.search;
    let pageSize = +params.pageSize;
    let currentPage = params.currentPage;
    let sortColumn = params.sortColumn;
    let sortExp = sortColumn.split(',');
    let orObject = [];
    for (let i = 0; i < searches.length; i++) {
        let key = searches[i].key;
        let value = searches[i].value;
        //searches = [{key:columnName, value: text},]
        orObject.push({
            key:{
                [Op.like] : searches[i].value
            }
        })
    }

    let start = (pageSize*currentPage)-pageSize;
    //indexing of currentPage is from 1 and not 0
    const result = await Email.findAndCountAll({
        where: {
          [Op.and]:orObject
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