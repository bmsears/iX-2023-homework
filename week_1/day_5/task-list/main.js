class Task {
  constructor(task, date) {
    this.task = task;
    this.date = date;
  }
}

class UI {
  constructor() {
    this.form = document.getElementById("form");
    this.task = document.getElementById("task-input");
    this.date = document.getElementById("date-input");
    this.tableBody = document.getElementById("table-body");

    this.form.addEventListener("submit", (e) => this.onFormSubmit(e));

    this.tasks = [];
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.task.value == "" || this.date.value == "") {
      alert("Please fill out all fields");
      return;
    }

    const task = new Task(this.task.value, this.date.value);
    this.tasks.push(task);
    this.renderTaskTable();

    this.task.value = "";
    this.date.value = "";
  }

  renderTaskTable() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      const tr = this.createTaskTableRow(task, i);
      this.tableBody.appendChild(tr);
    }
  }

  createTaskTableRow(task, index) {
    const tr = document.createElement("tr");
    const tdTask = document.createElement("td");
    const tdDate = document.createElement("td");
    const tdComplete = document.createElement("td");
    const tdActions = document.createElement("td");

    tdTask.innerHTML = task.task;
    tdDate.innerHTML = task.date;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    tdComplete.appendChild(checkbox);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.onclick = () => {
      this.tasks.splice(index, 1);
      this.renderTaskTable();
    };
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTask);
    tr.appendChild(tdDate);
    tr.appendChild(tdComplete);
    tr.appendChild(tdActions);

    return tr;
  }
}

const ui = new UI();
