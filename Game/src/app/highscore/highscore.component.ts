import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent {
  public activeTab: string = 'levelOne';
  public highscores: Array<{ player: string; score: number }> = [
    //This is just a placeholder, the actual highscores will be fetched from the database
    //The database will contain highscores for each level
    { player: 'Player 1', score: 300 },
    { player: 'Player 2', score: 900 },
    { player: 'Player 3', score: 100 },
    { player: 'Player 4', score: 700 },
    { player: 'Player 5', score: 800 },
    { player: 'Player 6', score: 500 },
    { player: 'Player 7', score: 400 },
    { player: 'Player 8', score: 200 },
    { player: 'Player 9', score: 600 },
    { player: 'Player 10', score: 1000 },
    { player: 'Player 11', score: 1100 },
    { player: 'Player 12', score: 1200 },
    { player: 'Player 13', score: 1300 },
    { player: 'Player 14', score: 1400 },
    { player: 'Player 15', score: 1500 },
  ];

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['']);
  }
}
