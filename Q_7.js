// Write a program to demonstrate various methods of path module in Node.js. 

const path = require('path');

// 1. Get the directory name of a path
const dirname = path.dirname('/path/to/file.txt');
console.log('Directory name:', dirname); // Output: /path/to

// 2. Get the basename of a path
const basename = path.basename('/path/to/file.txt');
console.log('Basename:', basename); // Output: file.txt

// 3. Get the extension of a file
const extname = path.extname('/path/to/file.txt');
console.log('Extension:', extname); // Output: .txt

// 4. Check if a path is absolute
const isAbsolute = path.isAbsolute('/path/to/file.txt');
console.log('Is absolute:', isAbsolute); // Output: true


// 5. Check if a path is a directory
const isDirectory = path.isDirectory('/path/to/file.txt');
console.log('Is directory:', isDirectory); // Output: true (assuming file.txt is a directory)

// 6. Parses a path into its components (root, dir, base, ext, name).
const parsedPath = path.parse('/path/to/file.txt');
console.log('Parsed path:', parsedPath);
// Output: { root: '/', dir: '/path/to', base: 'file.txt', ext: '.txt', name: 'file' }