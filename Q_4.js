// Write a node.js script to read a file and print its contents.

const fs = require('fs');

const filePath = 'your_file_path.txt'; // Replace with the actual file path

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log(data);
  }
});