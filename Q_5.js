// Write a node.js script to write contents to the file in original manner. 
// Delete file after finishing writing.

const fs = require('fs');

const filePath = 'your_file.txt'; // Replace with your desired file path
const content = 'This is the content you want to write to the file.'; // Replace with your content

// Writing the data in the file
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('Content written to file successfully.');

  // Delete the file after writing
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted successfully.');
    }
  });
});