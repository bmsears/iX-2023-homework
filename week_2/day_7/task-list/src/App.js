// App.js
import "./App.css";
import { useState, useEffect } from "react";
import { Task } from "./models/task";

import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage();
  }, [tasks]);

  function onTaskCreated(task) {
    setTaskToEdit(null);
    setTasks([...tasks, task]);
  }

  function onTaskDelete(task) {
    setTasks(tasks.filter((x) => x.date !== task.date));
  }

  function saveTasksToLocalStorage() {
    const json = JSON.stringify(tasks);
    localStorage.setItem("task", json);
  }

  function loadTasksFromLocalStorage() {
    const json = localStorage.getItem("task");
    if (json) {
      const taskArr = JSON.parse(json);
      if (taskArr.length) {
        setTasks(taskArr.map((x) => Task.fromJSON(x)));
      }
    }
  }

  return (
    <div className="m-5">
      <div className="card p-4">
        <TaskForm onTaskCreated={onTaskCreated} />
        <TaskTable tasks={tasks} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  );
}

export default App;
