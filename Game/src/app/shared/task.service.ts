import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public solvedTasks: string[] = [];
  public currentInteractable = '';

  // Content based on different levels [One, Two, Three, Four]
  public currentTask: any[] = [];
  public allTheories: any[] = [];
  public theories: any = {};
  public tasks: any = {};

  constructor() {}

  checkTaskAnswer(taskId: string) {
    const task = this.tasks[taskId];
    const check = Object.fromEntries(task.check.map((c) => Object.values(c)));
    let correctAnswer = true;

    for (let i = 0; i < task.inputs.length; i++) {
      const element = task.inputs[i];
      const input = document.getElementById(
        element.variable
      ) as HTMLInputElement;
      let value: any = '';
      try {
        if (input.type === 'checkbox') {
          value = input.checked;
        } else {
          value = eval(input.value);
        }
        if (check[element.variable] != value) {
          correctAnswer = false;
        }
      } catch (error) {
        correctAnswer = false;
      }
    }

    if (correctAnswer) {
      this.updateSolvedTask(taskId);
      return true;
    } else {
      return false;
    }
  }
  updateSolvedTask(taskId: string) {
    const taskIndex = this.currentTask.indexOf(taskId);
    const task = this.currentTask.splice(taskIndex, 1)[0];
    this.solvedTasks.push(task);
    this.updateCurrentTask();
  }
  updateCurrentTask() {
    const taskIds = Object.keys(this.tasks);
    for (let i = 0; i < taskIds.length; i++) {
      const taskId = taskIds[i];
      const task = this.tasks[taskId];
      if (
        !this.currentTask.includes(taskId) &&
        !this.solvedTasks.includes(taskId) &&
        this.solvedTasks.includes(task.requirement)
      ) {
        this.currentTask.push(taskId);
      }
    }
    this.currentTask.sort();
    this.solvedTasks.sort();
  }
}
