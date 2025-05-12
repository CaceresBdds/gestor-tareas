const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarea = sequelize.define('Tarea', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('pendiente', 'en_progreso', 'completado'),
        allowNull: false,
        defaultValue: 'pendiente'
    }
});

module.exports = Tarea;