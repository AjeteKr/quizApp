// Questions based on the images provided (HTML, CSS, Flexbox, etc.)
const QUESTIONS = [
  {
    text: 'What is CSS?',
    answers: [
      'The language of the description of the appearance of the document',
      'Hypertext markup language',
      'Programming language',
    ],
  },
  {
    text: 'Which tag is used to create a block in HTML?',
    answers: [
      '<div>',
      '<block>',
      '<span>',
    ],
  },
  {
    text: 'What is a block model?',
    answers: [
      'The way the elements are designed on the web page',
      'Name for a set of CSS rules',
      'File type',
    ],
  },
  {
    text: 'Which four parts make the block model?',
    answers: [
      'Content',
      'Border',
      'Padding',
      'Margin',
    ],
  },
  {
    text: 'What CSS property is used to control the external padding of an element?',
    answers: [
      'margin',
      'padding',
      'border',
    ],
  },
  {
    text: 'What CSS property is used to control the internal padding of an element?',
    answers: [
      'padding',
      'border',
      'margin',
    ],
  },
  {
    text: 'What CSS property is used to control the frame of the element?',
    answers: [
      'border',
      'padding',
      'margin',
    ],
  },
  {
    text: 'What is float?',
    answers: [
      'A property that allows you to move elements left or right on a web page',
      'A property that allows you to set transparency to elements',
      'A property that allows you to resize elements',
    ],
  },
  {
    text: 'What float value can be used to move an element to the left?',
    answers: [
      'left',
      'right',
      'center',
    ],
  },
  {
    text: 'What float value can be used to move an element to the right?',
    answers: [
      'right',
      'left',
      'center',
    ],
  },
  {
    text: 'What is FlexBox?',
    answers: [
      'CSS layout module designed to simplify the alignment of elements',
      'A method for creating animations',
      'File type',
    ],
  },
  {
    text: 'Which device is used to create a flex container?',
    answers: [
      'display: flexible',
      'display: unit',
      'display: built-in',
    ],
  },
  {
    text: 'What makes your content sound?',
    answers: [
      'Aligns elements horizontally in flex container',
      'Aligns elements vertically in flex container',
      'Manages elements order in flex container',
    ],
  },
  {
    text: 'What does the align-items connection do?',
    answers: [
      'Aligns the values vertically in flex container',
      'Align elements horizontally in flex container',
      'Manages elements order in flex container',
    ],
  },
  {
    text: 'What does a flex-direction connection do?',
    answers: [
      'Determines the purpose of the main axis along which the modules are distributed in the flex container',
      'Manages the direction in the extended axis in flex container',
      'Manages the elements\' size in a flex container',
    ],
  },
  {
    text: 'What is the value of the flex direction used to arrange the elements horizontally?',
    answers: [
      'row',
      'column',
      'row-reverse',
    ],
  },
  {
    text: 'What is the value of the flex direction used to arrange the elements vertically?',
    answers: [
      'column',
      'row',
      'row-reverse',
    ],
  },
  {
    text: 'What does flex wrap property do?',
    answers: [
      'Determine how elements are set inside the flex container',
      'Aligns elements horizontally in flex container',
      'Aligns elements vertically in flex container',
    ],
  },
  {
    text: 'What is the value of flex-wrap used for laying items in multiple lines?',
    answers: [
      'wrap',
      'now',
      'wrap-reverse',
    ],
  },
  {
    text: 'What does the flex-grow property do?',
    answers: [
      'Provides an opportunity to increase the element size if there is free space in the flex container',
      'Provides an opportunity to assess the element size whether there is no free space in the flex container',
      'Manages elements order in flex container',
    ],
  },
];

export default QUESTIONS;