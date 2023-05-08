import { Component, Input } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class ProgressbarComponent {
  tasks = [
    // Take these tasks from the task.service.ts <-- Low priority
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
  @Input() solvedTasks: string[];

  constructor(private taskService: TaskService) {
    this.solvedTasks = taskService.solvedTasks;
  }

  isTaskSolved(task: string): boolean {
    return this.solvedTasks.includes(task);
  }
}
