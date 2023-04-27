import mapData from './mapData.js';

export default class LevelMap {
  realfagsbygget: any;
  constructor() {
    this.realfagsbygget = {
      start: mapData.layers.find((l) => l.name === 'Start').objects[0],
      collisions: mapData.layers.find((l) => l.name === 'Collisions').objects,
      interactables: mapData.layers.find((l) => l.name === 'Interactables')
        .objects,
      theories: mapData.layers.find((l) => l.name === 'Theories').objects,
      theorySprites: mapData.layers.find((l) => l.name === 'TheorySprites')
        .layers,
      interactableSprites: mapData.layers.find(
        (l) => l.name === 'InteractableSprites'
      ).layers,
    };
  }
}
