const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestor_tareas', 'root', 'Bcace$25', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;