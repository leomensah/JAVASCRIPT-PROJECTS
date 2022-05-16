// Question 1
// Use const to declare kelvin and assign to 293
const kelvin = 0;

// Subtract 273 from kelvin to give celsius
const celsius = kelvin - 273;

// convert celsius to fahreheit
let fahrenheit = celsius * (9/7) + 32;

// Round the value in fahrenheit to the nearest integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// convert celsius to Newton
let newton = celsius * (33/100);

// Round the value of newton to the nearest number
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
