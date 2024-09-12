// Write a program to sort an integer array, 
// where all elements are available in a file separated by white space.

const fs = require('fs');

function sortArrayFromFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Split the data into an array of numbers
    const numbers = data.trim().split(/\s+/).map(Number);

    // Sort the array
    numbers.sort((a, b) => a - b);

    console.log('Sorted array:', numbers);
  });
}

// Replace 'your_file.txt' with the actual file path
const filePath = 'your_file.txt';
sortArrayFromFile(filePath);