// index.js

const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function main() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length > 0 && input.length <= 3,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for the text color:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or hexadecimal number for the shape color:',
      },
    ]);

    const { text, textColor, shape, shapeColor } = userInput;

    let logoShape;
    switch (shape) {
      case 'Circle':
        logoShape = new Circle();
        break;
      case 'Triangle':
        logoShape = new Triangle();
        break;
      case 'Square':
        logoShape = new Square();
        break;
      default:
        throw new Error('Invalid shape selected.');
    }

    logoShape.setColor(shapeColor);

    const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${logoShape.render()}<text x="110" y="130" fill="${textColor}" font-size="60">${text}</text></svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
