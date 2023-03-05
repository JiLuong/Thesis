import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public taskService: TaskService){}
  ngOnInit(): void { 
    console.log(this.taskService.currentInteractable)
  }

  open() {
    console.log("Open")
  }

  close() {
    console.log("Closed")
  }

}
