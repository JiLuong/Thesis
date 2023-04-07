import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public sliderValue: number = 0;

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    console.log(this.taskService.currentInteractable);
  }

  open() {
    console.log('Open');
  }

  close() {
    console.log('Closed');
  }
}
