//area of circle - PI*r*r

const PI = 3.14  //constant (fixed value / read only)
let radius = 2
let area  
// PI=4.7 //TypeError: Assignment to constant variable.
area = PI*radius*radius
console.log( `Area of radius ${radius} is  ${area}`)