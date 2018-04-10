const Models = require('../models/index');

const sequelize = Models.sequelize;

const ProductUsers = Models.productUsers;
const productUserAttributes = require('../attributes/product_user');

async function getProductUserById(id) {
    const result = await ProductUsers.findById(id,
        { attributes: productUserAttributes });
    return result;
}

module.exports = {
    getProductUserById
}