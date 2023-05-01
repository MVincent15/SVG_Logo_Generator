function Shape(color) {
  this.color = color;
  }


function Triangle(color) {
  Shape.call(this, color);
  this.output = function () {
    return `<polygon points='150, 18 244, 182 56, 182' fill="${this.color}" />`;
  }
}
  
function Square(color) {
  Shape.call(this, color);
  this.output = function () {
    return `<rect x="75" y="40" width="150" height="150" fill="${this.color}" />`;
  }
}

function Circle(color) {
  Shape.call(this, color);
  this.output = function () {
    return `<circle cx="150" cy="110" r="80" fill="${this.color}"/>`;
  }
}
  
module.exports = { Triangle, Square, Circle };