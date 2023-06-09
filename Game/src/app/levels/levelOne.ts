export const levelOne = {
  name: 'LevelOne',
  currentTask: ['1-a', '2-a', '3-a', '4-a', '5-a'],
  allTheories: [
    'b-1',
    'b-2',
    'b-3',
    'b-4',
    'b-5',
    'b-6',
    'b-7',
    'b-8',
    'b-9',
    'b-10',
    'd-1',
    'i-1',
    'i-2',
    'i-3',
    'i-4',
  ],
  theories: {
    'b-1': {
      type: 'book',
      title: 'Book 1',
      doc: '../assets/docus/Mechanics1/B1GeneralMathematics.pdf',
    },
    'b-2': {
      type: 'book',
      title: 'Book 2',
      doc: '../assets/docus/Mechanics1/B2MaterialProperties.pdf',
    },
    'b-3': {
      type: 'book',
      title: 'Book 3',
      doc: '../assets/docus/Mechanics1/B3ForcesInGeneralStatics.pdf',
    },
    'b-4': {
      type: 'book',
      title: 'Book 4',
      doc: '../assets/docus/Mechanics1/B4EquationsOfEquilibrium.pdf',
    },
    'b-5': {
      type: 'book',
      title: 'Book 5',
      doc: '../assets/docus/Mechanics1/B5InternalForces.pdf',
    },
    'b-6': {
      type: 'book',
      title: 'Book 6',
      doc: '../assets/docus/Mechanics1/B6BeamDeformations.pdf',
    },
    'b-7': {
      type: 'book',
      title: 'Book 7',
      doc: '../assets/docus/Mechanics1/B7CrossSectionalCenterOfMass.pdf',
    },
    'b-8': {
      type: 'book',
      title: 'Book 8',
      doc: '../assets/docus/Mechanics1/B8SecondMomentOfArea.pdf',
    },
    'b-9': {
      type: 'book',
      title: 'Book 9',
      doc: '../assets/docus/Mechanics1/B9SecondMomentOfAreaCalculation.pdf',
    },
    'b-10': {
      type: 'book',
      title: 'Book 10',
      doc: '../assets/docus/Mechanics1/B10NormalStress.pdf',
    },
    'd-1': {
      type: 'demo',
      title:
        'DEMONSTRATION: Variable second moment of area with origin through neutral axis',
    },
    'i-1': {
      type: 'info',
      description: 'MISSION DESCRIPTION',
      content:
        "<br>The figure illustrates a simply supported beam that is subject to an indeterminate force F at an unknown angle θ. The beam's length is also unknown. The objective of this mission is to determine whether the given conditions will cause failure in the beam.<br> <sub><small><strong>PS</strong>: Make sure you have understood the <em><u>game objectives</u></em> and <em><u>game controls</u></em>. Use the <em><u>task list</u></em> to view all accessible tasks and the <em><u>map</u></em> to locate the tasks. <br/> Maybe you can find something useful in your favorite facility, the library? </small></sub></br></br>",
      image: '../assets/taskFigures/info1.png',
    },
    'i-2': {
      type: 'info',
      description: 'Master Project',
      content:
        "<br> Designer's Den is a project that is part of my Master's thesis in Structural Engineering. <br><br>This level is predicated upon the syllabi of the courses TKT4116/TKT4118 Mechanics 1 offered at NTNU - Norwegian University of Science and Technology. The coursework encapsulates the principles of equilibrium in statically determinate structures. This level is primarily concerned with beam elements and their corresponding internal forces, as well as the mechanics of materials and the resultant internal stresses experienced by the elements. <br><br> Students will learn to apply various analytical methods to solve problems related to the deformation and failure of beam structures. The course also covers the properties of materials used in engineering design and their behavior under various loading conditions. <br><br> This project has been authored by <a href='https://www.linkedin.com/in/jimmy-luong-671923196/' style='color: burlywood;''>Jimmy Luong</a><br><br>",
    },
    'i-3': {
      type: 'info',
      description: 'Master Thesis',
      content:
        '<br>You can read the whole master thesis <a href="https://drive.google.com/file/d/1c2i8zcZmR-wSbQGb3FnwmvULpqxffxiX/view?usp=drive_link" style="color: burlywood;">here</a>. <br><br>If you have any questions or feedback regarding this project, please contact me at: <a href="mailto:jimmynl@stud.ntnu.no" style="color: burlywood;">jimmynl@stud.ntnu.no</a><br><br> Stay tuned for more updates! <br><br> ',
      image: '../assets/thumbsup.gif',
    },
    'i-4': {
      type: 'info',
      description: 'Unspoken Rizz',
      content:
        "<br>No, I won't give you my phone number for free, but you can have my instagram: <a href='https://www.instagram.com/jimmynluong/' style=' color: burlywood'>@jimmynluong</a><br><br>",
      image: '../assets/thumbsup.gif',
    },
  },
  tasks: {
    '1-a': {
      location: 'Storage',
      theory: 'Book 1',
      requirement: '',
      type: 'slider',
      description:
        '1a) Find the angle θ in degrees when it is defined as the product of the first two prime numbers and a multiple of 10.',
      image: '',
      inputs: [
        { variable: 'θ', unit: '°', min: 0, max: 360, step: 5, answer: 60 },
      ],
      check: [{ variable: 'θ', input: 60 }],
    },
    '1-b': {
      location: 'Chamber',
      theory: 'Book 1',
      requirement: '1-a',
      type: 'input',
      description:
        '1b) Find the horizontal and vertical components of the force F.',
      image: '../assets/taskFigures/fig1-b.png',
      inputs: [
        { variable: 'F<sub>x</sub>', unit: 'F', answer: '1/2 ' },
        { variable: 'F<sub>z</sub>', unit: 'F', answer: '√3/2 ' },
      ],
      check: [
        { variable: 'F<sub>x</sub>', input: 1 / 2 },
        { variable: 'F<sub>z</sub>', input: Math.sqrt(3) / 2 },
      ],
    },
    '1-c': {
      location: 'Class II',
      theory: 'Book 2',
      requirement: '1-b',
      type: 'input',
      description: '1c) Determine the design yielding stress f<sub>d</sub>.',
      image: '',
      inputs: [{ variable: 'f<sub>d</sub>', unit: ' N/mm²', answer: 338 }],
      check: [{ variable: 'f<sub>d</sub>', input: 338.095238 }],
    },
    '1-d': {
      location: 'Storage',
      theory: 'Book 6',
      requirement: '1-c',
      type: 'checkbox',
      description:
        '1d) Which of the following ratios is a reasonable criteria for maximum allowable deflection:',
      image: '',
      inputs: [
        { variable: 'checkbox1', display: 'L/25', picture: '', answer: false },
        { variable: 'checkbox2', display: 'L/250', picture: '', answer: true },
        {
          variable: 'checkbox3',
          display: 'L/2500',
          picture: '',
          answer: false,
        },
      ],
      check: [
        { variable: 'checkbox1', input: false },
        { variable: 'checkbox2', input: true },
        { variable: 'checkbox3', input: false },
      ],
    },
    '2-a': {
      location: 'Chamber',
      theory: 'Book 3',
      requirement: '',
      type: 'checkbox',
      description:
        '2a) Which of the following free body diagrams describe our system.',
      image: '',
      inputs: [
        {
          variable: 'checkbox1',
          picture: '../assets/taskFigures/pic2-b_1f.png',
          answer: false,
        },
        {
          variable: 'checkbox2',
          picture: '../assets/taskFigures/pic2-b_2f.png',
          answer: false,
        },
        {
          variable: 'checkbox3',
          picture: '../assets/taskFigures/pic2-b_t.png',
          answer: true,
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
      theory: 'Book 4',
      requirement: '2-a',
      type: 'input',
      description:
        '2b) Calculate the forces at the beam supports A and B using the equations of equilibrium.',
      image: '../assets/taskFigures/fig2-b.png',
      inputs: [
        { variable: 'A<sub>x</sub>', unit: 'F', answer: '1/2' },
        { variable: 'A<sub>z</sub>', unit: 'F', answer: '√3/6 ' },
        { variable: 'B<sub>z</sub>', unit: 'F', answer: '√3/3 ' },
      ],
      check: [
        { variable: 'A<sub>x</sub>', input: 1 / 2 },
        { variable: 'A<sub>z</sub>', input: Math.sqrt(3) / 6 },
        { variable: 'B<sub>z</sub>', input: Math.sqrt(3) / 3 },
      ],
    },
    '2-c': {
      location: 'Class I',
      theory: 'Book 5',
      requirement: '2-b',
      type: 'input',
      description:
        '2c) Find the internal forces of the beam using the intersection method. What are the internal forces of the beam at point L/3 from A?',
      image: '../assets/taskFigures/fig2-c.png',
      inputs: [
        { variable: 'N(L/3)', unit: 'F', answer: '1/2 ' },
        { variable: 'V(L/3)', unit: 'F', answer: '√3/6 ' },
        { variable: 'M(L/3)', unit: 'FL', answer: '√3/18 ' },
      ],
      check: [
        { variable: 'N(L/3)', input: 1 / 2 },
        { variable: 'V(L/3)', input: Math.sqrt(3) / 6 },
        { variable: 'M(L/3)', input: Math.sqrt(3) / 18 },
      ],
    },
    '2-d': {
      location: 'Class IV',
      theory: 'Book 5',
      requirement: '2-c',
      type: 'checkbox',
      description:
        '2d) Identify the correct axial-, shear- and moment diagrams:',
      image: '',
      inputs: [
        {
          variable: 'checkbox1N',
          picture: '../assets/taskFigures/pic2-d_1Nf.png',
          answer: false,
        },
        {
          variable: 'checkbox2N',
          picture: '../assets/taskFigures/pic2-d_2Nf.png',
          answer: false,
        },
        {
          variable: 'checkbox3N',
          picture: '../assets/taskFigures/pic2-d_3Nt.png',
          answer: true,
        },
        {
          variable: 'checkbox1V',
          picture: '../assets/taskFigures/pic2-d_1Vt.png',
          answer: true,
        },
        {
          variable: 'checkbox2V',
          picture: '../assets/taskFigures/pic2-d_2Vf.png',
          answer: false,
        },
        {
          variable: 'checkbox3V',
          picture: '../assets/taskFigures/pic2-d_3Vf.png',
          answer: false,
        },
        {
          variable: 'checkbox1M',
          picture: '../assets/taskFigures/pic2-d_1Mf.png',
          answer: false,
        },
        {
          variable: 'checkbox2M',
          picture: '../assets/taskFigures/pic2-d_2Mt.png',
          answer: true,
        },
        {
          variable: 'checkbox3M',
          picture: '../assets/taskFigures/pic2-d_3Mf.png',
          answer: false,
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
      theory: 'Book 5',
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
          answer: true,
        },
        {
          variable: 'checkbox2',
          picture: '',
          display:
            'The symbols in the shear-diagram reflect the direction and intensity of the vertical forces.',
          answer: true,
        },
        {
          variable: 'checkbox3',
          picture: '',
          display:
            'Because the beam is subjected to a point-load the moment diagram is linear.',
          answer: true,
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
      theory: 'Book 1',
      type: 'slider',
      description:
        '3a) Find the length L of the beam in meters by defining it as the number of sides in a regular hexagon.',
      image: '',
      inputs: [
        { variable: 'L', unit: ' meters', min: 1, max: 10, step: 1, answer: 6 },
      ],
      check: [{ variable: 'L', input: 6 }],
    },
    '3-b': {
      location: 'Chamber',
      theory: 'Book 1',
      requirement: '3-a',
      type: 'input',
      description:
        '3b) Find the force F in kilo Newtons when it is defined by the integral of a derivated function with boundaries from 1 to 3 where the function of variable x is described by x cubed plus two times x squared plus seven and a half times x.',
      image: '',
      inputs: [{ variable: 'F', unit: ' kN', answer: 57 }],
      check: [{ variable: 'F', input: 57 }],
    },
    '4-a': {
      location: 'Corridor',
      theory: 'Book 6',
      requirement: '',
      type: 'slider',
      description:
        '4) Given the following system. Calculate the deformation of the beam in the vertical direction at the point load. Use I<sub>y</sub> = 50 ∙ 10⁶ mm⁴. Assume that P is the vertical component of F.',
      image: '../assets/taskFigures/fig4-a.png',
      inputs: [
        {
          variable: 'w(x)',
          unit: ',7 mm',
          min: 1,
          max: 30,
          step: 1,
          answer: 16,
        },
      ],
      check: [{ variable: 'w(x)', input: 16 }],
    },
    '5-a': {
      location: 'Corridor',
      theory: 'Book 7',
      requirement: '',
      type: 'input',
      description:
        "5a) Determine the center of mass in the beam's cross-section.",
      image: '../assets/taskFigures/fig5-a.png',
      inputs: [
        { variable: 'Z<sub>c1</sub>', unit: ' mm', answer: 12.5 },
        { variable: 'Z<sub>c2</sub>', unit: ' mm', answer: 100 },
        { variable: 'Z<sub>c3</sub>', unit: ' mm', answer: 200 },
        { variable: '~Z<sub>c</sub>', unit: ' mm', answer: 87.5 },
      ],
      check: [
        { variable: 'Z<sub>c1</sub>', input: 12.5 },
        { variable: 'Z<sub>c2</sub>', input: 100 },
        { variable: 'Z<sub>c3</sub>', input: 200 },
        { variable: '~Z<sub>c</sub>', input: 87.5 },
      ],
    },
    '5-b': {
      location: 'Playroom',
      theory: 'Book 8 & 9',
      requirement: '5-a',
      type: 'input',
      description:
        "5b) Find the second moment of area for this section using Steiner's theorem.",
      image: '../assets/taskFigures/fig5-b.png',
      inputs: [
        { variable: 'I<sub>y,1</sub>', unit: ' mm⁴', answer: 21289062.5 },
        { variable: 'I<sub>y,2</sub>', unit: ' mm⁴', answer: 4570312.5 },
        { variable: 'I<sub>y,3</sub>', unit: ' mm⁴', answer: 28945312.5 },
        { variable: '~I<sub>y</sub>', unit: ' mm⁴', answer: 54804687.5 },
      ],
      check: [
        { variable: 'I<sub>y,1</sub>', input: 21289062.5 },
        { variable: 'I<sub>y,2</sub>', input: 4570312.5 },
        { variable: 'I<sub>y,3</sub>', input: 28945312.5 },
        { variable: '~I<sub>y</sub>', input: 54804687.5 },
      ],
    },
    '5-c': {
      location: 'Class V',
      theory: 'Book 8 & 9',
      requirement: '5-b',
      type: 'input',
      description:
        '5c) Doublecheck the second moment of area for the cross-section by calculating its mathematical definition. Fill in the missing boundaries of the following integral:',
      image: '../assets/taskFigures/fig5-c.png',
      inputs: [
        { variable: 'v<sub>1</sub>', unit: '', answer: -75 },
        { variable: 'v<sub>2</sub>', unit: '', answer: -62.5 },
        { variable: 'v<sub>3</sub>', unit: '', answer: 7.5 },
        { variable: 'v<sub>4</sub>', unit: '', answer: -62.5 },
        { variable: 'v<sub>5</sub>', unit: '', answer: 137.5 },
        { variable: 'v<sub>6</sub>', unit: '', answer: 87.5 },
      ],
      check: [
        { variable: 'v<sub>1</sub>', input: -75 },
        { variable: 'v<sub>2</sub>', input: -62.5 },
        { variable: 'v<sub>3</sub>', input: 7.5 },
        { variable: 'v<sub>4</sub>', input: -62.5 },
        { variable: 'v<sub>5</sub>', input: 137.5 },
        { variable: 'v<sub>6</sub>', input: 87.5 },
      ],
    },
    '5-d': {
      location: 'Laboratory',
      theory: 'Book 10',
      requirement: '5-c',
      type: 'input',
      description:
        "5d) Identify the maximum and minimum normal stresses in the beam at points 2 meters and 4 meters along its length using I<sub>y</sub> = 54,8 ∙ 10⁶ mm⁴. Hint: Identify the forces and moments at the relevant points. Then use Navier's equation σ = σ<sub>N</sub> + σ<sub>M</sub>",
      image: '../assets/taskFigures/fig5-d.png',
      inputs: [
        {
          variable: 'σ<sub>max</sub>(L=2)',
          unit: ',25 N/mm²  <sup>(Compression)</sup>',
          answer: 87,
        },
        {
          variable: 'σ<sub>min</sub>(L=2)',
          unit: ',87 N/mm²  <sup>(Tension)</sup>',
          answer: 49,
        },
        {
          variable: 'σ<sub>max</sub>(L=4)',
          unit: ',04 N/mm²  <sup>(Compression)</sup>',
          answer: 171,
        },
        {
          variable: 'σ<sub>min</sub>(L=4)',
          unit: ',19 N/mm²  <sup>(Tension)</sup>',
          answer: 103,
        },
      ],
      check: [
        { variable: 'σ<sub>max</sub>(L=2)', input: 87 },
        { variable: 'σ<sub>min</sub>(L=2)', input: 49 },
        { variable: 'σ<sub>max</sub>(L=4)', input: 171 },
        { variable: 'σ<sub>min</sub>(L=4)', input: 103 },
      ],
    },
    '5-e': {
      location: 'Canteen',
      theory: 'Everything',
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
          answer: false,
        },
        {
          variable: 'checkbox2',
          picture: '',
          display:
            'Yes. The maximum moments and shear forces in the beam are greater than the point load',
          answer: false,
        },
        {
          variable: 'checkbox3',
          picture: '',
          display:
            'Yes. The loading on the beam results in internal stresses greater than the design yielding stress',
          answer: false,
        },
        {
          variable: 'checkbox4',
          picture: '',
          display:
            "No. The beam's deformation is less than the deflection criteria",
          answer: true,
        },
        {
          variable: 'checkbox5',
          picture: '',
          display:
            'No. The maximum moments and shear forces in the beam are less than the point load',
          answer: false,
        },
        {
          variable: 'checkbox6',
          picture: '',
          display:
            'No. The loading on the beam results in internal stresses lower than the design yielding stress',
          answer: true,
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
