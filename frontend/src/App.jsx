import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendario from './Calendario';

function App() {
    const [tareas, setTareas] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [description, setDescription] = useState("");
    
    const fetchTareas = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/tasks');
            setTareas(response.data);
            console.log('tarea',response)

        } catch (error) {
            console.error("Hubo un error al obtener las tareas:", error);
        }
    };
    
    useEffect(() => {
        fetchTareas();
    }, []);



    return (
        <>
            <div className="App">
                <h1>Mis Tareas</h1>
                <ul>
                    {tareas.map((tarea) => (
                        <li key={tarea.id}>
                            <strong>{tarea.titulo}</strong>: {tarea.descripcion} - Estado: {tarea.estado}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="App">
                <Calendario />
            </div>
        </>
    );
}

export default App;