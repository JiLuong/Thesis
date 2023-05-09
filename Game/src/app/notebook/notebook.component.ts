import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss'],
})
export class NotebookComponent implements OnInit {
  tasks = [
    '1-a',
    '1-b',
    '1-c',
    '1-d',
    '2-a',
    '2-b',
    '2-c',
    '2-d',
    '2-e',
    '3-a',
    '3-b',
    '4-a',
    '5-a',
    '5-b',
    '5-c',
    '5-d',
    '5-e',
  ];
  @Input() solvedTasks: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.solvedTasks = this.taskService.solvedTasks;
  }

  getTaskImage(task: string): string {
    if (this.isTaskSolved(task)) {
      return `../assets/noteBook/${task}.png`;
    } else {
      return '';
    }
  }

  isTaskSolved(task: string): boolean {
    return this.solvedTasks.includes(task);
  }
}
