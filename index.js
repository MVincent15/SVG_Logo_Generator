const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shape");
let fileName = './examples/logo.svg'

const writeToFile = (fileName, answers) => {
  let shapeName;
  let shapeType;

  if (answers.shape === 'Triangle') {
    shapeName = new Triangle();
    shapeType = `<polygon points= '150, 18 244, 182 56, 182' fill='${answers.shapeColor}'/>`;
  } else if (answers.shape === 'Square') {
    shapeName = new Square();
    shapeType = `<rect x="75" y="40" width="150" height="150" fill="${answers.shapeColor}"/>`;
  } else {
    shapeName = new Circle();
    shapeType = `<circle cx="150" cy="110" r="80" fill="${answers.shapeColor}"/>`;
  }

  let generateSVG = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g>${shapeType}
       <text x="150" y="130" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.text}</text>
      </g>
    </svg>`;

  fs.writeFile(fileName, generateSVG, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}


const questions = () => {
  return inquirer.prompt([
      {
        type: "input",
        message: "Please provide text input for logo (up to 3 characters)",
        name: "text",
      },
      {
        type: "input",
        message: "Please provide a color keyword or hexadecimal number for text",
        name: "textColor",
      },
      {
        type: "list",
        name: "shape",
        message: "Which shape would you like the logo to be?",
        choices: [
          "Triangle",
          "Square",
          "Circle",
        ],
      },
      {
        type: "input",
        message: "Please provde color keyword or hexidecimal number for shape color",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Please re-enter a text value 3 characters or less");
        questions();
      } else {
        writeToFile(fileName, answers);
      }
    });
}

questions();