import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleSheetService } from '../shared/google-sheet.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent implements OnInit {
  public activeTab: string = 'levelOne';
  public highscores: any[] = [];
  public levelNumberToInt: number = 1;

  constructor(
    private router: Router,
    private googleSheetService: GoogleSheetService
  ) {}

  ngOnInit() {
    this.getHighscores(this.levelNumberToInt);
  }

  getHighscores(level: number) {
    if (this.activeTab == 'levelOne') this.levelNumberToInt = 1;
    else if (this.activeTab == 'levelTwo') this.levelNumberToInt = 2;
    else if (this.activeTab == 'levelThree') this.levelNumberToInt = 3;
    else if (this.activeTab == 'levelFour') this.levelNumberToInt = 4;

    this.googleSheetService.getScores(this.levelNumberToInt).then((data) => {
      this.highscores = data
        .filter((row) => row.name && row.score)
        .map((row) => ({ player: row.name, score: parseInt(row.score) }))
        .sort((a, b) => b.score - a.score);
    });
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
