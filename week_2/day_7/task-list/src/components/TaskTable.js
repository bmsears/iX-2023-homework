// TaskTable.js
import React from "react";

export default function TaskTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.task}</td>
                <td>{task.date}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-1"
                    onClick={() => props.onTaskDelete(task)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
