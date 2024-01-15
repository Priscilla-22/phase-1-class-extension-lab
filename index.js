// Your code here
class Polygon {
  constructor(ArrayOfSides) {
    this.ArrayOfSides = ArrayOfSides;
  }
  get countSides() {
    return `This are the number of sides: ${this.ArrayOfSides}`;
  }
  get Perimeter() {
    return `The perimeter is${this.ArrayOfSides.reduce(
      (sum, side) => sum + side,
      0
    )}`;
  }
}

class Triangle extends Polygon {
  constructor(...ArrayOfSides) {
    super(ArrayOfSides);
  }
  get isValid() {
    const [a, b, c] = this.ArrayOfSides;
    return a + b > c && b + c > a && c + a > b;
  }
}
const validTriangle = new Triangle(4, 4, 4);

class Square extends Polygon {
  constructor(...ArrayOfSides) {
    super(ArrayOfSides);
  }
  get isValid() {
    const [a, b, c, d] = this.ArrayOfSides;
    return a === b && b === c && c === d;
  }
  get area() {
    const OneSideLength = this.ArrayOfSides[0];
    return OneSideLength * OneSideLength;
  }
}
const validSquare = new Square(4, 4, 4, 4);
