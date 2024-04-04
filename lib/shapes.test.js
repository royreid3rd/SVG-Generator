const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Triangle renders correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle renders correctly', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });

  test('Square renders correctly', () => {
    const square = new Square();
    square.setColor('#FF0000');
    expect(square.render()).toEqual('<rect x="40" y="40" width="220" height="120" fill="#FF0000" />');
  });
});
