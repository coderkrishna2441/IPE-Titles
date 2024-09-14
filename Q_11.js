// Perform addition of 2 numbers by specifying function definition and call in separate files 
// and exporting them

const add = require('./addition'); // Import the add function

const result = add(5, 10);
console.log('The sum is:', result);