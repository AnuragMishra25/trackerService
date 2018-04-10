const Models = require('../models/index');

const sequelize = Models.sequelize;

const Google = Models.google;
const googleAttributes = require('../attributes/google');

async function getGoogleDataById(id) {
    const result = await Google.findById(id,
        { attributes: googleAttributes });
    return result;
}

async function getGoogleData(params) {
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
    const result = await Google.findAndCountAll({
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
    getGoogleDataById,
    getGoogleData
}