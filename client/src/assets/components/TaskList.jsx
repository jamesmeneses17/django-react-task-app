import { useEffect, useState } from "react";
import { obtenerTareas } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TaskList() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      const tareas = await obtenerTareas();
      console.log("Datos de la API:", tareas.data); // Verifica que los IDs sean números
      setTareas(tareas.data);
    }

    cargarTareas();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}
