const sequelize = require('./config/database');
const Tarea = require('./models/tareas');
const Usuario = require('./models/')

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');

        await sequelize.sync({ force: false });
        console.log('Modelos sincronizados con la base de datos');
    } catch (error) {
        console.lerror('Error al conectar o sincronizar:', error);
    } finally {
        await sequelize.close();
    }
})();
