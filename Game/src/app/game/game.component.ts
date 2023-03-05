import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import kaboom from 'kaboom';
import LevelMap from '../level-map';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mycanvas')
  private canvas = {} as ElementRef;
  private levelMap = new LevelMap();
  private player: any;
  private playerSprite: any;
  private interactables: any[] = [];
  private fixedmap: any;
  private camera: any;
  private k: any;

  ngOnDestroy(): void {
    console.log('hehdestroy');
  }

  ngAfterViewInit(): void {
    this.initGame();
    this.initPlayer();
    this.initLevelCollisions();
    this.initLevelInteractables();
    this.initInputController();
    // Create camera
    this.camera = this.player.pos;
    this.render();
  }

  initGame() {
    // Create game
    this.k = kaboom({
      global: false,
      width: 1500,
      height: 800,
      font: 'sinko',
      canvas: this.canvas.nativeElement,
      background: [0, 0, 0],
    });
    this.k.cam;
    // Load sprites and assets
    this.k.loadBean();
    this.k.loadSprite('map', '/assets/Rbygghighres.png');
    this.k.loadSprite('avatar', '/assets/spriteShadowDarker777.png', {
      // The image contains 25 frames layed out horizontally, slice it into individual frames
      sliceX: 9,
      // Define animations
      anims: {
        idle: {
          // Starts from frame 0, ends at frame 10
          from: 0,
          to: 0,
          // Frame per second
          speed: 10,
          loop: true,
        },
        run: {
          from: 1,
          to: 8,
          speed: 11,
          loop: true,
        },
      },
    });
  }

  initPlayer() {
    const k = this.k;
    // k.debug.inspect = true;
    // Create player
    this.fixedmap = k.add([k.sprite('map'), k.pos(0, 0)]);
    this.player = k.add([
      k.rect(80,110),
      k.origin('center'),
      k.pos(this.levelMap.realfagsbygget.start.x, this.levelMap.realfagsbygget.start.y),
      k.opacity(0),
      k.area(),
      k.solid(),
      {
        movement: {
          left: false,
          right: false,
          up: false,
          down: false,
        },
        facing: 0,
        speed: 400,
      },
    ]);
    this.playerSprite = k.add([
      k.sprite('avatar'), // sprite() component makes it render as a sprite
      k.origin('center'), // origin() component defines the pivot point (defaults to "topleft")
      k.pos(120, 80), // pos() component gives it position, also enables movement
      k.follow(this.player, k.vec2(0,5)),
    ]);
   

    // Player loop
    this.playerSprite.play('idle');
    this.playerSprite.onUpdate(() => {
      // Update player
      let speed = this.player.speed;
      const movement = Object.values(this.player.movement).filter(
        (v) => v
      ).length;
      if (movement > 1) speed *= 0.71;
      if (movement > 0 && this.playerSprite.curAnim() !== 'run')
        this.playerSprite.play('run');
      else if (movement == 0 && this.playerSprite.curAnim() !== 'idle')
        this.playerSprite.play('idle');
      if (this.player.movement.left) {
        this.player.move(-speed, 0);
        this.playerSprite.flipX(true);
      }

      if (this.player.movement.right) {
        this.player.move(speed, 0);
        this.playerSprite.flipX(false);
      }
      if (this.player.movement.up) this.player.move(0, -speed);
      if (this.player.movement.down) this.player.move(0, speed);
     
      // .angle is a property provided by rotate() component, here we're incrementing the angle by 120 degrees per second, dt() is the time elapsed since last frame in seconds
      this.player.angle += 120 * k.dt();
    });
  }

  initLevelCollisions() {
     const k = this.k;
    // Generate level map collisions
    for (let i = 0; i < this.levelMap.realfagsbygget.collisions.length; i++) {
      const rect = this.levelMap.realfagsbygget.collisions[i];
      k.add([
        k.pos(rect.x, rect.y),
        k.rect(rect.width, rect.height),
        k.rotate(rect.rotation),
        k.opacity(0),
        k.area(),
        k.solid(),
        {
          id: rect.id,
        }
      ]);
    } 
  }
  initLevelInteractables(){
    const k = this.k;
    for (let i = 0; i < this.levelMap.realfagsbygget.interactables.length; i++) {
      const interactable = this.levelMap.realfagsbygget.interactables[i];
      const interactableEntity = k.add([
        k.pos(interactable.x, interactable.y),
        k.rect(interactable.width, interactable.height),
        k.rotate(interactable.rotation),
        k.opacity(0),
        k.outline(1,k.color(0, 0, 255)),
        {
          class: interactable.class,
        }
      ]);
      this.interactables.push(interactableEntity);
    }

  }
  initInputController() {
    // Controles / user input
    window.addEventListener('keydown', (event) => {
      const { key } = event;
      if (key === 'ArrowLeft' || key === 'a') {
        this.player.movement.left = true;
        this.player.facing = 0;
      } else if (key === 'ArrowUp' || key === 'w') {
        this.player.movement.up = true;
      } else if (key === 'ArrowRight' || key === 'd') {
        this.player.movement.right = true;
        this.player.facing = 1;
      } else if (key === 'ArrowDown' || key === 's') {
        this.player.movement.down = true;
      }
    });
    window.addEventListener('keyup', (event) => {
      const { key } = event;
      if (key === 'ArrowLeft' || key === 'a') {
        this.player.movement.left = false;
      } else if (key === 'ArrowUp' || key === 'w') {
        this.player.movement.up = false;
      } else if (key === 'ArrowRight' || key === 'd') {
        this.player.movement.right = false;
      } else if (key === 'ArrowDown' || key === 's') {
        this.player.movement.down = false;
      }
    });
  }

  render() {
    const k = this.k;
    // Game loop
    k.onUpdate(() => {
      this.camera = k.vec2(
        k.lerp(this.camera.x, this.player.pos.x, 0.03),
        k.lerp(this.camera.y, this.player.pos.y, 0.03)
      );
      k.camPos(this.camera);
    });
  }
}
