// Write a node.js script to load a simple.html file on NodeJS server and print its contents. 

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Read the HTML file asynchronously
  // Make your own Html file because its an easy task
  fs.readFile('simple.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading HTML file');
    } else {
      // Send the HTML content as the response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});