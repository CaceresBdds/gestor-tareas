const express = require('express');
const router = express.Router();
const Tarea = require('../models/tareas');
const { json } = require('sequelize');


//Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tareas = await Tarea.findAll();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' })
    }
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
    try {
        const nuevaTarea = await Tarea.create(req.body);
        res.status(201),json(nuevaTarea);
    }catch (error) {
        res.status(400).json({ error: 'Error al crear la tarea' }),
    }
});

//Actualizar una tarea existente
router.put('/:id', async (req, res) => {
    const { id } = req.params>;
    try {
        const tarea = await Tarea.findByPk(id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

        await tarea.update(req.body);
        res.json(tarea);
    } catch (error) {
        res.status(404).json({ error: 'Error al actualizar la tarea' });
    }
});

//Eliminar una tarea
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const tarea = await Tarea.findByPk(id);
        if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada'});

        await tarea.destroy();
        res.json({mensaje: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
});

module.exports = router;