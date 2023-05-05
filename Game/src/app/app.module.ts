import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ModalComponent } from './modal/modal.component';
import { ConvertToBlankPipe } from './shared/convert-to-blank.pipe';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ConvertToDoubleSpacePipe } from './shared/convert-to-double-space.pipe';
import { LobbyComponent } from './lobby/lobby.component';
import { HighscoreComponent } from './highscore/highscore.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ModalComponent,
    ConvertToBlankPipe,
    ConvertToSpacePipe,
    ConvertToDoubleSpacePipe,
    LobbyComponent,
    HighscoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
