export const levelTwo = {
  name: 'levelTwo',
  currentTask: ['1-a', '2-a', '3-a', '4-a', '5-a'],
  allTheories: [
    'b-1',
    'b-2',
    'b-3',
    'b-4',
    'b-5',
    'b-6',
    'd-1',
    'd-2',
    'd-3',
    'i-1',
  ],
  theories: {
    'b-1': {
      type: 'book',
      title: 'Theory 1 Second moment of area',
      doc: '../assets/docus/2StatiskLikevekt.pdf',
    },
    'b-2': {
      type: 'book',
      title: 'Theory 2 Second moment of area',
      doc: '../assets/docus/6Lastvirkningsdiagram.pdf',
    },
    'b-3': {
      type: 'book',
      title: 'Theory 3 Second moment of area',
      doc: '../assets/docus/7IntroduksjonTilFasthetslære.pdf',
    },
    'b-4': {
      type: 'book',
      title: 'Theory 4 Second moment of area',
      doc: '../assets/docus/8Tverrsnittskonstanter.pdf',
    },
    'd-1': {
      type: 'demo',
      title:
        'Demonstration: Variable second moment of area with origin through neutral axis',
      values: [{ variable: 'θ', unit: '°', min: 100, max: 300 }],
    },
    'i-1': {
      type: 'info',
      description: 'MISSION DESCRIPTION',
      content:
        "The figure illustrates a simply supported beam that is subject to an indeterminate force F at an unknown angle θ. The beam's length is also unknown. The objective of this mission is to determine whether the given conditions will cause failure in the beam.",
      image: '../assets/taskFigures/info1.png',
      values: [{ variable: 'θ', unit: '°', min: 100, max: 300 }],
    },
  },
  tasks: {
    '1-a': {
      location: 'Storage',
      requirement: '',
      type: 'slider',
      description:
        '1a) TWOFind the angle θ in degrees when it is defined as the product of the first two prime numbers and a multiple of 10.',
      image: '',
      inputs: [{ variable: 'θ', unit: '°', min: 0, max: 360, step: 5 }],
      check: [{ variable: 'θ', input: 60 }],
    },
    '1-b': {
      location: 'Chamber',
      requirement: '1-a',
      type: 'input',
      description:
        '1b) Find the horizontal and vertical components of the force F.',
      image: '../assets/taskFigures/fig1-b.png',
      inputs: [
        { variable: 'F_x', unit: 'F' },
        { variable: 'F_z', unit: 'F' },
      ],
      check: [
        { variable: 'F_x', input: 1 / 2 },
        { variable: 'F_z', input: Math.sqrt(3) / 2 },
      ],
    },
    '1-c': {
      location: 'Class II',
      requirement: '1-b',
      type: 'input',
      description: '1c) Determine the design yielding stress f_d.',
      image: '',
      inputs: [{ variable: 'f_d', unit: 'N/mm²' }],
      check: [{ variable: 'f_d', input: 338 }],
    },
    '1-d': {
      location: 'Storage',
      requirement: '1-c',
      type: 'checkbox',
      description:
        '1d) Which of the following ratios is a reasonable criteria for maximum allowable deflection:',
      image: '',
      inputs: [
        { variable: 'checkbox1', display: 'L/25', picture: '' },
        { variable: 'checkbox2', display: 'L/250', picture: '' },
        { variable: 'checkbox3', display: 'L/2500', picture: '' },
      ],
      check: [
        { variable: 'checkbox1', input: false },
        { variable: 'checkbox2', input: true },
        { variable: 'checkbox3', input: false },
      ],
    },
    '2-a': {
      location: 'Chamber',
      requirement: '',
      type: 'checkbox',
      description:
        '2a) Which of the following free body diagrams describe our system.',
      image: '',
      inputs: [
        {
          variable: 'checkbox1',
          picture: '../assets/taskFigures/pic2-b_1f.png',
        },
        {
          variable: 'checkbox2',
          picture: '../assets/taskFigures/pic2-b_2f.png',
        },
        {
          variable: 'checkbox3',
          picture: '../assets/taskFigures/pic2-b_t.png',
        },
      ],
      check: [
        { variable: 'checkbox1', input: false },
        { variable: 'checkbox2', input: false },
        { variable: 'checkbox3', input: true },
      ],
    },
    '2-b': {
      location: 'Lobby',
      requirement: '2-a',
      type: 'input',
      description:
        '2b) Calculate the forces at the beam supports A and B using the equations of equilibrium.',
      image: '../assets/taskFigures/fig2-b.png',
      inputs: [
        { variable: 'A_x', unit: 'F' },
        { variable: 'A_z', unit: 'F' },
        { variable: 'B_z', unit: 'F' },
      ],
      check: [
        { variable: 'A_x', input: 1 / 2 },
        { variable: 'A_z', input: Math.sqrt(3) / 6 },
        { variable: 'B_z', input: Math.sqrt(3) / 3 },
      ],
    },
    '2-c': {
      location: 'Class I',
      requirement: '2-b',
      type: 'input',
      description:
        '2c) Find the internal forces of the beam using the intersection method. What are the internal forces of the beam at point L/3 from A',
      image: '../assets/taskFigures/fig2-c.png',
      inputs: [
        { variable: 'N(L/3)', unit: 'F' },
        { variable: 'V(L/3)', unit: 'F' },
        { variable: 'M(L/3)', unit: 'FL' },
      ],
      check: [
        { variable: 'N(L/3)', input: 1 / 2 },
        { variable: 'V(L/3)', input: Math.sqrt(3) / 6 },
        { variable: 'M(L/3)', input: Math.sqrt(3) / 18 },
      ],
    },
    '2-d': {
      location: 'Class IV',
      requirement: '2-c',
      type: 'checkbox',
      description:
        '2d) Identify the correct axial-, shear- and moment diagrams:',
      image: '',
      inputs: [
        {
          variable: 'checkbox1N',
          picture: '../assets/taskFigures/pic2-d_1Nf.png',
        },
        {
          variable: 'checkbox2N',
          picture: '../assets/taskFigures/pic2-d_2Nf.png',
        },
        {
          variable: 'checkbox3N',
          picture: '../assets/taskFigures/pic2-d_3Nt.png',
        },
        {
          variable: 'checkbox1V',
          picture: '../assets/taskFigures/pic2-d_1Vt.png',
        },
        {
          variable: 'checkbox2V',
          picture: '../assets/taskFigures/pic2-d_2Vf.png',
        },
        {
          variable: 'checkbox3V',
          picture: '../assets/taskFigures/pic2-d_3Vf.png',
        },
        {
          variable: 'checkbox1M',
          picture: '../assets/taskFigures/pic2-d_1Mf.png',
        },
        {
          variable: 'checkbox2M',
          picture: '../assets/taskFigures/pic2-d_2Mt.png',
        },
        {
          variable: 'checkbox3M',
          picture: '../assets/taskFigures/pic2-d_3Mf.png',
        },
      ],
      check: [
        { variable: 'checkbox1N', input: false },
        { variable: 'checkbox2N', input: false },
        { variable: 'checkbox3N', input: true },
        { variable: 'checkbox1V', input: true },
        { variable: 'checkbox2V', input: false },
        { variable: 'checkbox3V', input: false },
        { variable: 'checkbox1M', input: false },
        { variable: 'checkbox2M', input: true },
        { variable: 'checkbox3M', input: false },
      ],
    },
    '2-e': {
      location: 'Laboratory',
      requirement: '2-d',
      type: 'checkbox',
      description:
        '2e) Check that the diagrams for internal forces are correct:',
      image: '',
      inputs: [
        {
          variable: 'checkbox1',
          picture: '',
          display:
            'There are no axial forces right to the point load because of the roller support.',
        },
        {
          variable: 'checkbox2',
          picture: '',
          display:
            'The symbols in the shear-diagram reflect the direction and intensity of the vertical forces.',
        },
        {
          variable: 'checkbox3',
          picture: '',
          display:
            'Because the beam is subjected t a point-load the moment diagram is linear.',
        },
      ],
      check: [
        { variable: 'checkbox1', input: true },
        { variable: 'checkbox2', input: true },
        { variable: 'checkbox3', input: true },
      ],
    },
    '3-a': {
      location: 'Class III',
      type: 'slider',
      description:
        '3a) Find the length L of the beam in meters by defining it as the number of sides in a regular hexagon.',
      image: '',
      inputs: [{ variable: 'L', unit: ' meters', min: 1, max: 10, step: 1 }],
      check: [{ variable: 'L', input: 6 }],
    },
    '3-b': {
      location: 'Chamber',
      requirement: '3-a',
      type: 'input',
      description:
        '3b) Find the force F in kilo Newtons when it is defined by the integral of a derivated function with boundaries from 1 to 3 where the function of variable x is described by x cubed plus two times x squared plus seven and a half times x.',
      image: '',
      inputs: [{ variable: 'F', unit: ' kilo Newtons' }],
      check: [{ variable: 'F', input: 57 }],
    },
    '4-a': {
      location: 'Corridor',
      requirement: '',
      type: 'slider',
      description:
        '4) Given the following system. Calculate the deformation of the beam in the vertical direction at the point load. Use I_y = 50 ∙ 10⁶ mm⁴. Assume that P is the vertical component of F.',
      image: '../assets/taskFigures/fig4-a.png',
      inputs: [{ variable: 'w(x)', unit: ',7 mm', min: 1, max: 30, step: 1 }],
      check: [{ variable: 'w(x)', input: 16 }],
    },
    '5-a': {
      location: 'Hallway',
      requirement: '',
      type: 'input',
      description:
        "5a) Determine the center of mass in the beam's cross-section.",
      image: '../assets/taskFigures/fig5-a.png',
      inputs: [
        { variable: 'Zc1', unit: ' mm' },
        { variable: 'Zc2', unit: ' mm' },
        { variable: 'Zc3', unit: ' mm' },
        { variable: '~Zc', unit: ' mm' },
      ],
      check: [
        { variable: 'Zc1', input: 12.5 },
        { variable: 'Zc2', input: 100 },
        { variable: 'Zc3', input: 200 },
        { variable: '~Zc', input: 87.5 },
      ],
    },
    '5-b': {
      location: 'Playroom',
      requirement: '5-a',
      type: 'input',
      description:
        "5b) Find the second moment of area for this section using Steiner's theorem.",
      image: '../assets/taskFigures/fig5-b.png',
      inputs: [
        { variable: 'I_y,1', unit: ' mm⁴' },
        { variable: 'I_y,2', unit: ' mm⁴' },
        { variable: 'I_y,3', unit: ' mm⁴' },
        { variable: '~¨I_y', unit: ' mm⁴' },
      ],
      check: [
        { variable: 'I_y,1', input: 28945312.5 },
        { variable: 'I_y,2', input: 4570312.5 },
        { variable: 'I_y,3', input: 21289062.5 },
        { variable: '~¨I_y', input: 54804687.5 },
      ],
    },
    '5-c': {
      location: 'Class V',
      requirement: '5-b',
      type: 'input',
      description:
        '5c) Doublecheck the second moment of area for the cross-section by calculating its mathematical definition. Fill in the missing boundaries of the following integral:',
      image: '../assets/taskFigures/fig5-c.png',
      inputs: [
        { variable: 'v1', unit: '' },
        { variable: 'v2', unit: '' },
        { variable: 'v3', unit: '' },
        { variable: 'v4', unit: '' },
        { variable: 'v5', unit: '' },
        { variable: 'v6', unit: '' },
      ],
      check: [
        { variable: 'v1', input: -75 },
        { variable: 'v2', input: -62.5 },
        { variable: 'v3', input: 7.5 },
        { variable: 'v4', input: -62.5 },
        { variable: 'v5', input: 137.5 },
        { variable: 'v6', input: 87.5 },
      ],
    },
    '5-d': {
      location: 'Laboratory',
      requirement: '5-c',
      type: 'input',
      description:
        "5d) Identify the maximum and minimum normal stresses in the beam at points 2 meters and 4 meters along its length using I_y = 54,8 ∙ 10⁶ mm⁴. Hint: Use Navier's equation σ = σ_N + σ_M",
      image: '../assets/taskFigures/fig5-d.png',
      inputs: [
        { variable: 'σ_max(L=2)', unit: ',25 N/mm²  (Compression)' },
        { variable: 'σ_min(L=2)', unit: ',87 N/mm²  (Tension)' },
        { variable: 'σ_max(L=4)', unit: ',04 N/mm²  (Compression)' },
        { variable: 'σ_min(L=4)', unit: ',19 N/mm²  (Tension)' },
      ],
      check: [
        { variable: 'σ_max(L=2)', input: 87 },
        { variable: 'σ_min(L=2)', input: 49 },
        { variable: 'σ_max(L=4)', input: 171 },
        { variable: 'σ_min(L=4)', input: 103 },
      ],
    },
    '5-e': {
      location: 'Canteen',
      requirement: '5-d',
      type: 'checkbox',
      description: '5e) Will the beam fail under the given conditions?',
      image: '../assets/taskFigures/fig5-e.png',
      inputs: [
        {
          variable: 'checkbox1',
          picture: '',
          display:
            "Yes. The beam's deformation is greater than the deflection criteria",
        },
        {
          variable: 'checkbox2',
          picture: '',
          display:
            'Yes. The maximum moments and shear forces in the beam are greater than the point load',
        },
        {
          variable: 'checkbox3',
          picture: '',
          display:
            'Yes. The loading on the beam results in internal stresses greater than the design yielding stress',
        },
        {
          variable: 'checkbox4',
          picture: '',
          display:
            "No. The beam's deformation is less than the deflection criteria",
        },
        {
          variable: 'checkbox5',
          picture: '',
          display:
            'No. The maximum moments and shear forces in the beam are less than the point load',
        },
        {
          variable: 'checkbox6',
          picture: '',
          display:
            'No. The loading on the beam results in internal stresses lower than the design yielding stress',
        },
      ],
      check: [
        { variable: 'checkbox1', input: false },
        { variable: 'checkbox2', input: false },
        { variable: 'checkbox3', input: false },
        { variable: 'checkbox4', input: true },
        { variable: 'checkbox5', input: false },
        { variable: 'checkbox6', input: true },
      ],
    },
  },
};
