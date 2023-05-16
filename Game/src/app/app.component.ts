import { Component, OnInit } from '@angular/core';
import { GameComponent } from './game/game.component';
import LevelMap from './level-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Game';
  levelMap = new LevelMap();

  ngOnInit(): void {}
}
