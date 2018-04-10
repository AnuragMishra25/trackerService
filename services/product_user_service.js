const productUserRepository = require('../repositories/product_user_repository');

async function getProductUserById(id) {
    const productUser = await productUserRepository.getProductUserById(1);
    return productUser;
}

module.exports = {
    getProductUserById
}