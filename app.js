var geometry = require('./index.js');
console.log( 'The area of a circle of radius 4 is '
           + geometry.circlearea(4));

console.log( 'The circumference of a circle of radius 4 is ',
            geometry.circlecircumference(4));

console.log( 'The area of a square with sides of 4 is ',
            geometry.squarearea(4));

console.log( 'The perimeter of a square with height of 6 and base of 4 is ',
            geometry.squareperimeter(4 , 6));

console.log( 'The area of a triangle with base of 3 and height of 6 is ',
            geometry.trianglearea(3 , 6));

console.log( 'The perimeter of a triangle with base of 3 height of 6 and hypotenuse of 8 is ',
            geometry.trianglearea(3 , 6 , 8));