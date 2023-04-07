import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ModalComponent implements OnInit {
  public sliderValue: number = 0;

  constructor(public taskService: TaskService, private sanitizer: DomSanitizer) {}

  public getTrustedUrl(url: string) {
    console.log("test")
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

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
