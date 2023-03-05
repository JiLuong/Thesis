import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public currentInteractable = "";
  public tasks = {
    '0': {
      type: 'input',
      description: '0.It seems that the length, L, of the beam in meters is the number of sides in a hexagon',
      image: "../assets/oppgavetest.png",
      inputs: [
        { variable: 'L', unit: 'meters' },
        { variable: 'F', unit: 'kilo Newtons' },
      ],
      check: [
        {variable: 'L', input: 6},
        {variable: 'F', input: 57},
      ] 
    },
    '1': {
      type: 'slider',
      description: '1.What is the center of mass in the beam cross-section',
      image: "../assets/oppgavetest.png",
      inputs: [
        { variable: 'Zc1', unit: 'milimeters' },
        { variable: 'Zc2', unit: 'milimeters' },
        { variable: 'Zc3', unit: 'milimeters' },
        { variable: 'Zc', unit: 'milimeters' },
      ],
      check: [
        {variable: 'Zc1', input: 12.5},
        {variable: 'Zc2', input: 100},
        {variable: 'Zc3', input: 200},
        {variable: 'Zc', input: 87.5},
      ] 
    },
  };
  
  constructor() { }

  
}
