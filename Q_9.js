// Write a node.js script to print 3 different JSON objects by specifying corresponding object name on address 
// bar. 

const url = require('url');
const http = require('http');

const objects = {
  // Define your JSON objects here
  object1: {
    property1: 'value1',
    property2: 'value2'
  },
  object2: {
    property3: 'value3',
    property4: 'value4'
  },
  object3: {
    property5: 'value5',
    property6: 'value6'
  }
};

const server = http.createServer((req, res) => {
  // Parse the URL to extract the object name
  const parsedUrl = url.parse(req.url, true);
  const objectName = parsedUrl.pathname.substring(1); // Remove leading slash

  // Check if the object name exists
  if (objects.hasOwnProperty(objectName)) {
    // Print the corresponding JSON object
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(objects[objectName]));
  } else {
    // Handle invalid object name (e.g., send a 404 Not Found response)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Object not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});