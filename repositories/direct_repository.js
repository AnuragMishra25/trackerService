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
    const result = await Direct.findAndCountAll({
        where: {
          [Op.and]:orObject
        },
        limit: pageSize,
        offset: start,
        order: [sortExp]
      });
    return result;
}

module.exports = {
    getDirectById,
    getDirectData
}