import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game/game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PlaceholderComponent } from './placeholder/placeholder.component'; //Delete this line and the PlaceholderComponent when levels are implemented
import { HighscoreComponent } from './highscore/highscore.component';

const routes: Routes = [
  { path: '', component: LobbyComponent },
  { path: 'levelOne', component: GameComponent },
  { path: 'levelTwo', component: PlaceholderComponent },
  { path: 'levelThree', component: PlaceholderComponent },
  { path: 'levelFour', component: PlaceholderComponent },
  { path: 'highscore', component: HighscoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
