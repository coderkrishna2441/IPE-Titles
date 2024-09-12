// Write a script to declare and array, complement it and calculate its summation. 
// Print complement of each element in green color and print summation in red color. 

const chalk = require('chalk');

function calculateComplementAndSum(array) {
    // ~ Calculates the bitwise complement
  const complementArray = array.map(element => ~element);
  const sum = complementArray.reduce((acc, val) => acc + val, 0);

  console.log('Complement of each element:', complementArray.map(element => chalk.green(element)));
  console.log('Summation:', chalk.red(sum));
}

const numbers = [1, 2, 3, 4, 5];
calculateComplementAndSum(numbers);