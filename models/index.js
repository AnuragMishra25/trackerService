// require('mysql2').defaults.parseInt8 = true;

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);

const db = {};

const sequelize = new Sequelize('attribution', 'username', 'password', {
    host: 'attributiondbinstance.cr3khkirkklm.us-east-2.rds.amazonaws.com',
    port: 3306,
    logging: console.log,
    maxConcurrentQueries: 5000,
    dialect: 'mysql',
    pool: { maxConnections: 100, maxIdleTime: 50 },
    language: 'en'
})

fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
