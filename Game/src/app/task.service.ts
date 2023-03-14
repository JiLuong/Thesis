import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public currentInteractable = "";
  public tasks = {
    '0': {
      type: 'slider',
      description: '1a) Find the angle θ in degrees when it is defined as the product of the first two prime numbers and a multiple of 10.',
      image: "",
      inputs: [
        {variable: 'θ', unit: 'degree' },
      ],
      check: [
        {variable: 'θ', input: 60},
      ] 
    },
    '1': {
      type: 'input',
      description: '1b) Find the horizontal and vertical components of the force F.',
      image: "../assets/oppgavetest.png", //Dekomposering av F
      inputs: [
        {variable: 'Fx', unit: 'F' },
        {variable: 'Fz', unit: 'F' },
      ],
      check: [
        {variable: 'Fx', input: Math.sqrt(3)/2},
        {variable: 'Fz', input: 1/2},
      ] 
    },
    '2': {
      type: 'input',
      description: '1c) Determine the design yielding stress f_d.',
      image: "", //Bilde i spillet (på en tavle) med brøken f_d = fy/γM0 OG Steel S355, γM0 = 1.05
      inputs: [
        {variable: 'f_d', unit: 'N/mm²' },
      ],
      check: [
        {variable: 'f_d', input: 338},
      ] 
    },
    '3': {
      type: 'checkbox',
      description: '1d) Which of the following ratios is a reasonable criteria for maximum allowable deflection:',
      image: "", 
      inputs: [ // Ha flere options L/25, L/250, L/2500
        {variable: 'something', unit: '' },
      ],
      check: [
        {variable: 'something', input: "L/250"},
      ] 
    },
    '4': {
      type: 'checkbox',
      description: '2a) Which of the following free body diagrams describe our system.',
      image: "", // Ha flere bilder Bilde 1, Bilde 2, Bilde 3 tilknyttet hver options
      inputs: [ 
        {variable: 'something', unit: '' },
      ],
      check: [
        {variable: 'something', input: "Bilde 2"},
      ] 
    },
    '5': {
      type: 'input',
      description: '2b) Calculate the forces at the beam supports A and B using the equations of equilibrium.',
      image: "", // Ha riktig bilde (Free body diagram) tilgjengelig
      inputs: [
        {variable: 'A_x', unit: 'F' },
        {variable: 'A_z', unit: 'F' },
        {variable: 'B_z', unit: 'F' },
      ],
      check: [
        {variable: 'A_x', input: 1/2},
        {variable: 'A_z', input: Math.sqrt(3)/6},
        {variable: 'V_z', input: Math.sqrt(3)/3},
      ] 
    },
    '6': {
      type: 'input',
      description: '2d) Find the internal forces of the beam using the intersection method. What are the internal forces of the beam at point L/3 from A',
      image: "", //Bilde av intersections (From A to F OG B to F)
      inputs: [
        {variable: 'N(L/3)', unit: 'F' },
        {variable: 'V(L/3)', unit: 'F' },
        {variable: 'M(L/3)', unit: 'FL' },
      ],
      check: [
        {variable: 'N(L/3)', input: 1/2},
        {variable: 'V(L/3)', input: Math.sqrt(3)/6},
        {variable: 'M(L/3)', input: Math.sqrt(3)/3},
      ] 
    },
    '7': {
      type: 'checkbox',
      description: '2d) Find the internal forces of the beam using the intersection method. What are the internal forces of the beam at point L/3 from A',
      image: "", // Ha flere bilder for hver type diagram Bilde 1x, Bilde 2x, Bilde 3x tilknyttet hver options
      inputs: [
        {variable: 'something N', unit: '' },
        {variable: 'something V', unit: '' },
        {variable: 'something M', unit: '' },
      ],
      check: [
        {variable: 'something N', input: "Bilde N3"},
        {variable: 'something V', input: "Bilde V1"},
        {variable: 'something M', input: "Bilde M2"},
      ] 
    },
    '8': {
      //There are no axial forces right to the point load because of the roller support
      //The symbols in the shear-diagram reflect the direction and intensity of the vertical forces.
      //Because the beam is subjected t a point-load the moment diagram is linear.
      type: 'checkbox',
      description: '2e) Check that the diagrams for internal forces are correct:',
      image: "", 
      inputs: [
        {variable: 'something N', unit: '' },
        {variable: 'something V', unit: '' },
        {variable: 'something M', unit: '' },
      ],
      check: [
        {variable: 'something N', input: "Bilde N3"},
        {variable: 'something V', input: "Bilde V1"},
        {variable: 'something M', input: "Bilde M2"},
      ] 
    },
    '9': {
      type: 'slider',
      description: '3a) Find the length L of the beam in meters by defining it as the number of sies in a regular hexagon.',
      image: "", 
      inputs: [
        {variable: 'L', unit: 'meters' },
      ],
      check: [
        {variable: 'L', input: 6},
      ] 
    },
    '10': {
      type: 'input',
      description: '3b) Find the force F in kilo Newtons when it is defined by the integral of a derivated function with boundaries from 1 to 3 where the function of variable x is described by x cubed plus two times x squared plus seven and a half times x.',
      image: "", //Bilde av intersections (From A to F OG B to F)
      inputs: [
        {variable: 'F', unit: 'kilo Newtons' },
      ],
      check: [
        {variable: 'F', input: 57},
      ] 
    },
    '11': {
      type: 'slider',
      description: '4) Given the following system. Calculate the deformation of the beam in the vertical direction at the point load. Use I_y = 50 ∙ 10⁶ mm⁴.',
      image: "", //Bilde av systemet og formlene 
      inputs: [
        {variable: 'w(x)', unit: ',3 mm' },
      ],
      check: [
        {variable: 'w(x)', input: 19},
      ] 
    },
    '12': {
      type: 'input',
      description: "5a) Determine the center of mass in the beam's cross-section.",
      image: "../assets/oppgavetest.png", //Bilde av Figur
      inputs: [
        { variable: 'Zc1', unit: 'mm' },
        { variable: 'Zc2', unit: 'mm' },
        { variable: 'Zc3', unit: 'mm' },
        { variable: 'Zc', unit: 'mm' },
      ],
      check: [
        {variable: 'Zc1', input: 12.5},
        {variable: 'Zc2', input: 100},
        {variable: 'Zc3', input: 200},
        {variable: 'Zc', input: 87.5},
      ] 
    },
    '13': {
      type: 'input',
      description: "5b) Find the second moment of area for this section using Steiner's theorem.",
      image: "../assets/oppgavetest.png", //Bilde av tverrsnittet fra LF opg 5a) i tillegg til numerering av 1,2 og 3
      inputs: [
        { variable: 'I_y,1', unit: 'mm⁴' },
        { variable: 'I_y,2', unit: 'mm⁴' },
        { variable: 'I_y,3', unit: 'mm⁴' },
        { variable: 'I_y', unit: 'mm⁴' },
      ],
      check: [
        {variable: 'Zc1', input: 28945312.5},
        {variable: 'Zc2', input: 4570312.5},
        {variable: 'Zc3', input: 21289062.5},
        {variable: 'Zc', input: 54804687.5},
      ] 
    },
    '14': {
      type: 'input',
      description: "5c) Doublecheck the second moment of area for the cross-section by calculating its mathematical definition. Fill in the missing boundaries of the following integral:",
      image: "", //Bilde av integralet med variabler v1, v2, v3, ...
      inputs: [
        { variable: 'v1', unit: '' },
        { variable: 'v2', unit: '' },
        { variable: 'v3', unit: '' },
        { variable: 'v4', unit: '' },
        { variable: 'v5', unit: '' },
        { variable: 'v6', unit: '' },
      ],
      check: [
        {variable: 'v1', input: -75},
        {variable: 'v2', input: -62.5},
        {variable: 'v3', input: 7.5},
        {variable: 'v4', input: -62.5},
        {variable: 'v5', input: 137.5},
        {variable: 'v6', input: 87.5},
      ] 
    },
    '15': {
      type: 'input',
      description: "5d) Identify the maximum and minimum normal stresses in the beam at points 2 meters and 4 meters along its length using I_y = 54,8 ∙ 10⁶ mm⁴.",
      image: "", //Bilde av Sideprofilen til tverrsnittet med aksial og momentbidrag i spenning
      inputs: [
        {variable: 'σ_max(L=2)', unit: ',25 N/mm²  (Compression)' },
        {variable: 'σ_min(L=2)', unit: ',87 N/mm²  (Tension)' },
        {variable: 'σ_max(L=4)', unit: ',04 N/mm²  (Compression)' },
        {variable: 'σ_min(L=4)', unit: ',19 N/mm²  (Tension)' },
      ],
      check: [
        {variable: 'σ_max(L=2)', input: 87 },
        {variable: 'σ_min(L=2)', input: 49 },
        {variable: 'σ_max(L=4)', input: 171 },
        {variable: 'σ_min(L=4)', input: 103 },
      ] 
    },
    '16': {
      type: 'checkbox',
      description: '5e) Will the beam fail under the given conditions?',
      image: "", //Bilde av selve bjelken
      inputs: [
        {variable: 'something 1', unit: '' },
        {variable: 'something 2', unit: ' ' },
      ],
      check: [
        {variable: 'something 1', input: "alternativ 4"},
        {variable: 'something 2', input: "alternativ 6"},
      ] 
    },
  };
  
  constructor() { }

  
}
