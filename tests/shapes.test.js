const { Triangle, Square, Circle } = require("../lib/shape.js");


describe('Triangle', () => {
  it('should give a triangle with the given color', () => {
    const shape= new Triangle('blue');
    expect(shape.output()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill="blue" />`);
  });
});

describe('Square', () => {
  it('should give a sqaure with the given color', () => {
    const shape= new Square('white');
    expect(shape.output()).toEqual('<rect x="75" y="40" width="150" height="150" fill="white" />')
  });
});

describe('Circle', () => {
  it('should give a circle with the given color', () => {
    const shape= new Circle('green');
    expect(shape.output()).toEqual(`<circle cx="150" cy="110" r="80" fill="green"/>`)
  });
});
