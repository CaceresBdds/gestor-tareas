const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use (cors());
app.use(express.json());

let tareas = [
    { id: 1, tituldccdo: "Tarea de ejemplo", descripcion: "Descripción de ejemplo", estado: "pendientes" },
];

app.get('/api/tasks', (req, res) => {
    res.json(tareas);
});

app.post('/api/tasks', (req, res) => {
    const nuevaTarea = {
        id:tareas.length + 1,
        ...req.body,
        estado: "pendientes"
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
