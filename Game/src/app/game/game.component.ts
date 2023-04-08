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
import { TaskService } from '../shared/task.service';

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
  private theories: any[] = [];
  private fixedmap: any;
  private mapOverlap: any;
  private camera: any;
  private k: any;

  public modalVisible = false;
  public mapVisible = false;
  public taskListVisible = false;
  public newestTask = false;

  public correctAnswerSubmitted = false;
  public wrongAnswerSubmitted = false;

  public opacityToggler = false;

  public playerSpeed = 400;

  constructor(public taskService: TaskService) {}

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngAfterViewInit(): void {
    this.initGame();
    this.initPlayer();
    this.initLevelMapCollisions();
    this.initLevelInteractables();
    this.initLevelTheories();
    this.initInputController();
    this.camera = this.player.pos;
    this.render();

    (window as any).sqrt = Math.sqrt;
    (window as any).sin = Math.sin;
    (window as any).cos = Math.cos;
    
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
    this.k.loadSprite('map', '/assets/Rbygghighres.png');
    this.k.loadSprite('avatar', '/assets/spriteShadowDarker777.png', {
      // The avatar image contains X frames layed out horizontally. Slicing it into individual frames
      sliceX: 9,
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
    this.k.loadSprite('overlaps', '/assets/RbygghighresOverlaps.png');
  }

  initPlayer() {
    const k = this.k;
    /* k.debug.inspect = true; */
    // Create player
    this.fixedmap = k.add([k.sprite('map'), k.pos(0, 0)]);
    this.player = k.add([
      k.rect(80, 110),
      k.origin('center'),
      k.pos(
        this.levelMap.realfagsbygget.start.x,
        this.levelMap.realfagsbygget.start.y
      ),
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
        speed: this.playerSpeed,
      },
    ]);
    this.playerSprite = k.add([
      k.sprite('avatar'), // sprite() component makes it render as a sprite
      k.origin('center'), // origin() component defines the pivot point (defaults to "topleft")
      k.pos(120, 80),     // pos() component gives it position, also enables movement
      k.follow(this.player, k.vec2(0, 1.25)),
    ]);
    this.mapOverlap = k.add([k.sprite('overlaps'), k.pos(0, 0)]);

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

      let isColliding = false;
      for (let i = 0; i < this.interactables.length; i++) {
        const interactableElement = this.interactables[i];
        if (this.player.isColliding(interactableElement)) {
          isColliding = true;
          if (this.taskService.currentInteractable != interactableElement.class) {
            this.taskService.currentInteractable = interactableElement.class;           
          }          
        }
      }
      if (!isColliding && this.taskService.currentInteractable != '') {
        this.taskService.currentInteractable = '';
      }

      for (let j = 0; j < this.theories.length; j++) {
        const theoryElement = this.theories[j];
        if (this.player.isColliding(theoryElement)) {
          this.taskService.currentInteractable = theoryElement.class;
          
        }
      }
    });

  }

  initLevelMapCollisions() {
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
        },
      ]);
    }
  }
  initLevelInteractables() {
    const k = this.k;
    for (
      let i = 0;
      i < this.levelMap.realfagsbygget.interactables.length;
      i++
    ) {
      const interactable = this.levelMap.realfagsbygget.interactables[i];
      const interactableEntity = k.add([
        k.pos(interactable.x, interactable.y),
        k.rect(interactable.width, interactable.height),
        k.rotate(interactable.rotation),
        k.opacity(0),
        k.area(),
        {
          class: interactable.class,
        },
      ]);
      this.interactables.push(interactableEntity);
    }
  }

  initLevelTheories() {
    const k = this.k;
    for (
      let i = 0;
      i < this.levelMap.realfagsbygget.theories.length;
      i++
    ) {
      const theory = this.levelMap.realfagsbygget.theories[i];
      const theoryEntities = k.add([
        k.pos(theory.x, theory.y),
        k.rect(theory.width, theory.height),
        k.rotate(theory.rotation),
        k.opacity(0),
        k.area(),
        {
          class: theory.class,
        },
      ]);
      this.theories.push(theoryEntities);
    }
  }

  initInputController() {
    // Controles / user input
    window.addEventListener('keydown', (event) => {
      const { key } = event;
      if (this.modalVisible) return;

      if (key === ' ') {
        if (this.taskService.currentTask.includes(this.taskService.currentInteractable)||this.taskService.solvedTasks.includes(this.taskService.currentInteractable)) {
          this.player.speed = 0 ;  
        }
      } else if (key === 'ArrowLeft' || key === 'a') {
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
      if (key === ' ') {
        if (this.taskService.currentTask.includes(this.taskService.currentInteractable)||this.taskService.solvedTasks.includes(this.taskService.currentInteractable)) {
          this.modalVisible = true;
          this.taskListVisible = false;
          this.mapVisible = false;
          this.player.speed = 0 ;
          this.newestTask = true;
        }
        if (this.taskService.solvedTasks.includes(this.taskService.currentInteractable)) {
          this.newestTask = false;
        }
        if (this.taskService.allTheories.includes(this.taskService.currentInteractable)) {
          this.modalVisible = true;
          this.taskListVisible = false;
          this.mapVisible = false;
          this.newestTask = false;
        }
      } else if (key === 'ArrowLeft' || key === 'a') {
        this.player.movement.left = false;
      } else if (key === 'ArrowUp' || key === 'w') {
        this.player.movement.up = false;
      } else if (key === 'ArrowRight' || key === 'd') {
        this.player.movement.right = false;
      } else if (key === 'ArrowDown' || key === 's') {
        this.player.movement.down = false;
      } else if (key === 'Escape') {
        this.closeModal();
      } else if (key === 'Enter') {
        if (this.newestTask) {
          this.submitTask();
        }
      }
    });
  }

  closeModal() {
    this.modalVisible = false;
    this.mapVisible = false;
    this.taskListVisible = false;
    this.player.speed = this.playerSpeed ;
  }
  submitTask() {
    if (
      this.taskService.checkTaskAnswer(this.taskService.currentInteractable)
    ) {
      //Soundeffect: Correct
      this.correctAnswerSubmitted = true;
      setTimeout(() => {
        this.correctAnswerSubmitted = false;
        this.closeModal();
      }, 900);
    
    } else {
      //Soundeffect: Wrong
      this.wrongAnswerSubmitted = true;
      setTimeout(() => {
        this.wrongAnswerSubmitted = false;
      }, 500);
    }
  }

  toggleMap() {
    this.mapVisible = !this.mapVisible;
    this.taskListVisible = false;
    this.modalVisible = false;
    this.player.speed = this.playerSpeed;
  }

  toggleTaskList() {
    this.taskListVisible = !this.taskListVisible;
    this.mapVisible = false;
    this.modalVisible = false;
    this.player.speed = this.playerSpeed;
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

      //Popups transparency for when the character is moving
      const movement = Object.values(this.player.movement).filter(
        (v) => v
      ).length;
      if (this.mapVisible || this.taskListVisible) {
        if (movement > 0 && !this.opacityToggler) {
          this.opacityToggler = true;
        } else if (movement == 0 && this.opacityToggler) {
          this.opacityToggler = false;
        }
      }
    });

    if (this.taskService.currentTask.length == 0) {
      //Win
    }
  }
}
