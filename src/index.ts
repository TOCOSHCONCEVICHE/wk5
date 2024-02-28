import { Rectangle } from './rectangle';
import { Circle } from './circle';


const rectangle = new Rectangle(5, 3);
const circle = new Circle(4);

// Use classes, variables, and functions
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());
rectangle.print();

console.log("Circle Area:", circle.area());
console.log("Circle Perimeter:", circle.perimeter());
circle.print();