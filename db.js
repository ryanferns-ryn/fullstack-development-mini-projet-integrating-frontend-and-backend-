const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'ryco',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;