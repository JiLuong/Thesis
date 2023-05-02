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

import { Router } from '@angular/router';

import { levelOne } from '../levels/levelOne';
import { levelTwo } from '../levels/levelTwo';
import { levelThree } from '../levels/levelThree';
import { levelFour } from '../levels/levelFour';

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
  private taskSprites: any[] = [];
  private theorySprites: any[] = [];
  private theories: any[] = [];
  private background: any;
  private fixedmap: any;
  private mapOverlap: any;
  private objectOverlap: any;
  private plants: any;
  private sofas: any;

  private camera: any;
  private k: any;

  public modalVisible = false;

  public mapVisible = false;
  public taskListVisible = false;
  public infoObjectives = false;
  public infoControls = false;

  public backNavigation = false;

  public newestTask = false;

  public correctAnswerSubmitted = false;
  public wrongAnswerSubmitted = false;

  public opacityToggler = false;

  public playerSpeed = 400;

  public victory = false;

  constructor(public taskService: TaskService, private router: Router) {}

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngAfterViewInit(): void {
    const allLevels = {
      levelOne: levelOne,
      levelTwo: levelTwo,
      levelThree: levelThree,
      levelFour: levelFour,
    };

    const urlSegments = this.router.url.split('/');
    const levelNumber = urlSegments[urlSegments.length - 1];
    const level = allLevels[levelNumber];

    this.taskService.currentTask = level.currentTask;
    this.taskService.allTheories = level.allTheories;
    this.taskService.theories = level.theories;
    this.taskService.tasks = level.tasks;

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
    this.k.loadSprite('background', '/assets/background.png');
    this.k.loadSprite('map', '/assets/RBygg.png');
    this.k.loadSprite('avatar', '/assets/spriteDarker777.png', {
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
    this.k.loadSprite('plants', '/assets/passagePlants.png');
    this.k.loadSprite('sofas', '/assets/passageSofas.png');
    this.k.loadSprite('mapOverlap', '/assets/RByggMapOverlap.png');
    this.k.loadSprite('objectOverlap', '/assets/RByggObjectOverlap.png');

    //Task sprites
    for (
      let i = 0;
      i < this.levelMap.realfagsbygget.interactables.length;
      i++
    ) {
      let taskNumber = this.levelMap.realfagsbygget.interactables[i];
      this.k.loadSprite(
        taskNumber.class,
        '/assets/taskSprites/task' + taskNumber.class + '.png'
      );
    }
    //Theory sprites
    for (let i = 0; i < this.levelMap.realfagsbygget.theories.length; i++) {
      let theoryNumber = this.levelMap.realfagsbygget.theories[i];
      this.k.loadSprite(
        theoryNumber.class,
        '/assets/theorySprites/theory' + theoryNumber.class + '.png'
      );
    }
  }

  initPlayer() {
    const k = this.k;
    /* k.debug.inspect = true; */
    // Create player
    this.background = k.add([k.sprite('background'), k.pos(-50, -250)]);
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
      k.sprite('avatar'),
      k.origin('center'),
      k.pos(120, 80),
      k.follow(this.player, k.vec2(0, 1.25)),
      k.z(1),
    ]);

    this.mapOverlap = k.add([k.sprite('mapOverlap'), k.pos(0, 0), k.z(10000)]);
    this.objectOverlap = k.add([
      k.sprite('objectOverlap'),
      k.pos(0, 0),
      k.z(10001),
    ]);
    this.plants = k.add([k.sprite('plants'), k.pos(0, 0), k.z(1175)]);
    this.sofas = k.add([k.sprite('sofas'), k.pos(0, 0), k.z(1140)]);

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

      this.playerSprite.z = this.playerSprite.pos.y;

      let isColliding = false;

      // Check if player is colliding with any TASK sprites
      for (let i = 0; i < this.interactables.length; i++) {
        const interactableElement = this.interactables[i];

        // Remove color from all TASK sprites
        const taskSprite = this.taskSprites[i];
        taskSprite.color = null;

        if (this.player.isColliding(interactableElement)) {
          isColliding = true;

          // Change color of TASK sprites
          if (
            this.taskService.currentTask.includes(interactableElement.class) ||
            this.taskService.solvedTasks.includes(interactableElement.class)
          ) {
            taskSprite.color = k.rgb(100, 100, 100);
          }

          // Change currentInteractable if player is colliding with a TASK sprite
          if (
            this.taskService.currentInteractable !== interactableElement.class
          ) {
            this.taskService.currentInteractable = interactableElement.class;
          }
        }
      }

      // Reset currentInteractable if player is not colliding with any TASK sprites
      if (!isColliding && this.taskService.currentInteractable != '') {
        this.taskService.currentInteractable = '';
      }

      // Check if player is colliding with THEORY sprites
      for (let j = 0; j < this.theories.length; j++) {
        const theoryElement = this.theories[j];

        // Remove color from all THEORY sprites
        const theorySprite = this.theorySprites[j];
        if (
          theorySprite.color !== null &&
          theorySprite.theoryClass !== this.taskService.currentInteractable
        ) {
          theorySprite.color = null;
        }

        if (this.player.isColliding(theoryElement)) {
          this.taskService.currentInteractable = theoryElement.class;

          // Change color of THEORY sprites
          theorySprite.color = k.rgb(100, 100, 100);
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

      // Create interactable collision
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

      // Create interactable sprite
      let interactableVisuals =
        this.levelMap.realfagsbygget.interactableSprites.find(
          (i) => i.name === interactable.class
        );
      if (interactableVisuals) {
        interactableVisuals.class = interactableEntity.class;
        interactableVisuals.x = interactableVisuals.offsetx;
        interactableVisuals.y = interactableVisuals.offsety;
      } else {
        interactableVisuals = interactableEntity;
      }
      let interactableSprite = k.add([
        k.sprite(interactable.class),
        k.pos(interactableVisuals.x, interactableVisuals.y),
        k.origin('topleft'),
        k.z(3),
        {
          class: interactable.class,
        },
      ]);
      this.taskSprites.push(interactableSprite);
    }
  }

  initLevelTheories() {
    const k = this.k;
    for (let i = 0; i < this.levelMap.realfagsbygget.theories.length; i++) {
      const theory = this.levelMap.realfagsbygget.theories[i];

      // Create theory collision
      const theoryEntities = k.add([
        k.pos(theory.x, theory.y),
        k.rect(theory.width, theory.height),
        k.opacity(0),
        k.area(),
        {
          class: theory.class,
        },
      ]);
      this.theories.push(theoryEntities);

      // Create theory sprite
      let theoryVisuals = this.levelMap.realfagsbygget.theorySprites.find(
        (t) => t.name === theory.class
      );
      if (theoryVisuals) {
        theoryVisuals.class = theoryEntities.class;
        theoryVisuals.x = theoryVisuals.offsetx;
        theoryVisuals.y = theoryVisuals.offsety;
      } else {
        theoryVisuals = theoryEntities;
      }
      const theorySprite = k.add([
        k.sprite(theory.class),
        k.pos(theoryVisuals.x, theoryVisuals.y),
        k.origin('topleft'),
        k.z(3),
        {
          theoryClass: theory.class, // Add class property to sprite object
        },
      ]);
      this.theorySprites.push(theorySprite);
    }
  }

  initInputController() {
    // Controls / user input
    window.addEventListener('keydown', (event) => {
      const { key } = event;
      if (this.modalVisible) return;

      if (key === ' ') {
        if (
          this.taskService.currentTask.includes(
            this.taskService.currentInteractable
          ) ||
          this.taskService.solvedTasks.includes(
            this.taskService.currentInteractable
          )
        ) {
          this.player.speed = 0;
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
        if (this.backNavigation) return;
        if (
          this.taskService.currentTask.includes(
            this.taskService.currentInteractable
          ) ||
          this.taskService.solvedTasks.includes(
            this.taskService.currentInteractable
          )
        ) {
          this.modalVisible = true;
          this.taskListVisible = false;
          this.mapVisible = false;
          this.infoObjectives = false;
          this.infoControls = false;
          this.player.speed = 0;
          this.newestTask = true;
        }
        if (
          this.taskService.solvedTasks.includes(
            this.taskService.currentInteractable
          )
        ) {
          this.newestTask = false;
        }
        if (
          this.taskService.allTheories.includes(
            this.taskService.currentInteractable
          )
        ) {
          this.modalVisible = true;
          this.taskListVisible = false;
          this.mapVisible = false;
          this.infoObjectives = false;
          this.infoControls = false;
          this.newestTask = false;
          this.player.speed = 0;
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

  toggleNavigationBack() {
    this.backNavigation = !this.backNavigation;
    this.player.speed = this.playerSpeed;
    this.modalVisible = false;
    this.mapVisible = false;
    this.taskListVisible = false;
    this.infoObjectives = false;
    this.infoControls = false;
  }

  toggleInfoObjectives() {
    this.infoObjectives = !this.infoObjectives;
    this.player.speed = this.playerSpeed;
    this.modalVisible = false;
    this.mapVisible = false;
    this.taskListVisible = false;
    this.infoControls = false;
  }

  toggleInfoControls() {
    this.infoControls = !this.infoControls;
    this.player.speed = this.playerSpeed;
    this.modalVisible = false;
    this.mapVisible = false;
    this.taskListVisible = false;
    this.infoObjectives = false;
  }

  toggleMap() {
    this.mapVisible = !this.mapVisible;
    this.player.speed = this.playerSpeed;
    this.modalVisible = false;
    this.taskListVisible = false;
    this.infoObjectives = false;
    this.infoControls = false;
  }

  toggleTaskList() {
    this.taskListVisible = !this.taskListVisible;
    this.player.speed = this.playerSpeed;
    this.modalVisible = false;
    this.mapVisible = false;
    this.infoObjectives = false;
    this.infoControls = false;
  }

  closeModal() {
    this.player.speed = this.playerSpeed;
    this.modalVisible = false;
    this.mapVisible = false;
    this.taskListVisible = false;
    this.infoObjectives = false;
    this.infoControls = false;
  }

  submitTask() {
    if (
      this.taskService.checkTaskAnswer(this.taskService.currentInteractable)
    ) {
      //Add Soundeffect: Correct
      this.correctAnswerSubmitted = true;
      setTimeout(() => {
        this.correctAnswerSubmitted = false;
        this.closeModal();
      }, 900);
    } else {
      //Add Soundeffect: Wrong
      this.wrongAnswerSubmitted = true;
      setTimeout(() => {
        this.wrongAnswerSubmitted = false;
      }, 500);
    }

    if (this.taskService.currentTask.length == 0) {
      this.victory = true;

      setTimeout(() => {
        this.navigateToHome();
      }, 10000);
    }
  }

  navigateToHome() {
    this.router.navigate(['']);
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

      //'Map' and 'Task list' transparency for when the character is moving
      const movement = Object.values(this.player.movement).filter(
        (v) => v
      ).length;
      if (
        this.mapVisible ||
        this.taskListVisible ||
        this.infoObjectives ||
        this.infoControls
      ) {
        if (movement > 0 && !this.opacityToggler) {
          this.opacityToggler = true;
        } else if (movement == 0 && this.opacityToggler) {
          this.opacityToggler = false;
        }
      }
    });
  }
}
