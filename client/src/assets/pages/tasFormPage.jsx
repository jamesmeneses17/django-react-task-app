import { useEffect } from "react";
import { set, useForm } from "react-hook-form";
import {
  crearTarea,
  eliminarTarea,
  actualizarTarea,
  obtenerTarea,
} from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function tasFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  console.log("ID de la tarea:", params.id);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      actualizarTarea(params.id, data);
      console.log("Actualizando tarea:", params.id);
      toast.success("Tarea Actualizada ", {
        position: "button-right",
        background: "#101010",
        color: "#fff",
      });
    } else {
      await crearTarea(data);
      toast.success("Tarea creada exitosamente", {
        position: "button-right",
        background: "#101010",
        color: "#fff",
      });
    }

    navigate("/task");
  });

  useEffect(() => {
    async function cargarTarea() {
      if (params.id) {
        const res = await obtenerTarea(params.id);
        console.log("Datos de la tarea:", res.data);

        setValue("title", res.data.title);
        setValue("description", res.data.description);
      }
    }

    cargarTarea();
  }, [params.id, setValue]);

  const handleDelete = async () => {
    const accepted = window.confirm("¿Estás seguro de eliminar esta tarea?");
    if (accepted) {
      try {
        await eliminarTarea(params.id);
        navigate("/task");
      } catch (error) {
        console.error("Error al eliminar la tarea:", error);
      }
    }
    toast.success("Tarea eliminada  exitosamente", {
      position: "button-right",
      background: "#101010",
      color: "#fff",
    });
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <br />
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button 
            onClick={handleDelete}
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
