import { Component } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent {
  buttonClickSound() {
    const buttonClick = new Audio('../assets/audio/ButtonClick.mp3');
    buttonClick.play();
  }
  buttonHoverSound() {
    const buttonHover = new Audio('../assets/audio/ButtonHover.mp3');
    buttonHover.play();
  }
}
