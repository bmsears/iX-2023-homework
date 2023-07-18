export class Task {
  constructor(task, date) {
    this.task = task;
    this.date = date;
  }

  static fromJSON(json) {
    return new Task(json.task, json.date);
  }
}
