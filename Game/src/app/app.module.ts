import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { ConvertToBlankPipe } from './shared/convert-to-blank.pipe';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ConvertToDoubleSpacePipe } from './shared/convert-to-double-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ModalComponent,
    ConvertToBlankPipe,
    ConvertToSpacePipe,
    ConvertToDoubleSpacePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
