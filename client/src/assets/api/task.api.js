import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:8000/task/api/v1/task/",
});

export const obtenerTareas = () => taskApi.get("/");

export const obtenerTarea = (id) => taskApi.get(`/${id}/`);

export const crearTarea = (tarea) => taskApi.post("/", tarea);

export const eliminarTarea = (id) => taskApi.delete(`/${id}/`);

export const actualizarTarea = (id, tarea) => taskApi.put(`/${id}/`, tarea);

