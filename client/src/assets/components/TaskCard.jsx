import { useNavigate } from "react-router-dom";

export function TaskCard({ tarea }) {
  const navigate = useNavigate();
  return (
    <div
    className="bg-zinc-800 p-3 hover:bg-zinc-700 hove:cursor-pointer"
    onClick={() => {
        navigate(`/task/${tarea.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{tarea.title}</h1>
      <p className="text-slate-400">{tarea.description}</p>
      <hr />
    </div>
  );
}
