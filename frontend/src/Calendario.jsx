import React from 'react';
import {  Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import esES from 'date-fns/locale/es';

const locales = {
    'es': esES,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
});

const eventos = [
    {
        id:1,
        title: 'Tarea de ejemplo',
        start: new Date(),
        end: new Date(),
    },
];

function Calendario(){
    return (
        <div style={{ height: '600px', margin: '30px' }}>
            <Calendar 
            localizer={localizer}
            events={eventos}
            startAccessor="start"
            endAcceddor="end"
            defaultView="week"
            culture="es"
            messages={{
                next: "Sig.",
                previous: "Ant.",
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
            }}
            />
        </div>
    )
}

export default Calendario;