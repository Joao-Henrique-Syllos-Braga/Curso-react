import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./app.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      const data = await response.json();
      console.log(data)
      setTasks(data)
    }
    fetchTasks
  }, []);

  function onTaskClick(taskId) {
    console.log("Task clicked:");
    const newTasks = tasks.map((task) => {
      console.log(task.isCompleted);
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function onAddTaskSubmit(title, descripition) {
    const newTask = {
      id: tasks.length + 1,
      title,
      descripition,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-6">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
