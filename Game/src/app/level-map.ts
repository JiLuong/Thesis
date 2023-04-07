import test from "./test.js";

export default class LevelMap {
    realfagsbygget: any;
    constructor() {
        this.realfagsbygget = {
            start: test.layers.find(l => l.name === "Start").objects[0],
            collisions: test.layers.find(l => l.name === "Collisions").objects,
            interactables: test.layers.find(l => l.name === "Interactables").objects,
            theories: test.layers.find(l => l.name === "Theories").objects,
        }
    }
}
