const kelvin =0;
// i created  a variable which cann't be changed with constant and variable name is kelvin and assigned value as 293;
const celsius=kelvin-273;
// i created variable named variable and celsius and so to get celsius is kelvin-273 ;
let fahrenhiet = celsius * (9/5) +32;
// to get fahrenhiet i first declared fahrenhiet and assign that value of fahrenhiet    
fahrenhiet=Math.floor(fahrenhiet);
// so because often when you get fahrenhiet i most to be in decimal so i used math.floor() to round decimal numbers
console.log(`The Temperature is ${fahrenhiet} degrees fahrenhiet`);
let Newton = celsius*(33/100);
Newton=Math.floor(Newton);
console.log(`The Temperature is ${Newton} degrees Newton.`);