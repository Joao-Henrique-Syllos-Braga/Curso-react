import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [descripition, setDescripition] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="bg-white border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="bg-white border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descripition}
        onChange={(event) => setDescripition(event.target.value)}
      />
      <button
        //Verificar se os campos não estão vazios antes de adicionar a tarefa
        onClick={() => {
            if (title.trim() === "" || descripition.trim() === "") {
                return alert("Por favor, preencha todos os campos antes de adicionar a tarefa.");
            } 
          onAddTaskSubmit(title, descripition);
          setTitle("");
          setDescripition("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Aicionar
      </button>
    </div>
  );
}

export default AddTask;
