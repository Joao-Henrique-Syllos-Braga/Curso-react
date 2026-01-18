import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <div className="flex justify-center relative">
            <button onClick={() => navigate(-1)} className="absolute left-0 bottom-0 text-white">
                <ChevronLeftIcon />
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Detalhes da tarefa
            </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
