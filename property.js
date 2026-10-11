const { DataTypes } = require('sequelize');

const sequelize = require('./db');

const Property = sequelize.define('Property', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Property;