import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  public sliderValue = 0;
  public rectangleValue = 200;
  public rectangleStaticValue = 100;
  public rectangleDynamicValue = 200;

  constructor(
    public taskService: TaskService,
    private sanitizer: DomSanitizer
  ) {}

  public getTrustedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {}

 
}