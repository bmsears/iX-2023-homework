import React, { useState, useEffect } from "react";
import { Task } from "../models/task";

export default function TaskForm(props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (props.task) {
      setTask(props.task.task);
      setDate(props.task.date);
    }
  }, [props.task]);

  function onTaskFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let taskk = new Task(task, date);
    props.onTaskCreated(taskk);

    clearInputs();
  }

  function isValid() {
    return task !== "" && date !== "";
  }

  function clearInputs() {
    setTask("");
    setDate("");
  }

  return (
    <div>
      <h1>Task List &#9997;</h1>

      <form id="form" onSubmit={onTaskFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            id="task-input"
            type="text"
            className="form-control"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            id="date-input"
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.taskToEdit ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}
