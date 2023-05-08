import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { TaskService } from '../shared/task.service';
import { DomSanitizer } from '@angular/platform-browser';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  @Input() newestTask: boolean;

  public sliderValue = 0;
  public rectangleValue = 200;
  public rectangleStaticValue = 100;
  public rectangleDynamicValue = 200;

  constructor(
    public taskService: TaskService,
    private sanitizer: DomSanitizer,
    private gameComponent: GameComponent
  ) {
    this.newestTask = this.gameComponent.newestTask;
  }

  public getTrustedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {}
}
