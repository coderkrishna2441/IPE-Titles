// Write a Node.js script to create two listeners for a common event. Call their respective callbacks. 
//Print no.of events associated with an emitter.Remove one of the listeners and call remaining listeners again. 
// Also print no. of remaining listeners. 

const EventEmitter = require('events');

const emitter = new EventEmitter();

// Listener 1
emitter.on('myEvent', () => {
  console.log('Listener 1 called');
});

// Listener 2
emitter.on('myEvent', () => {
  console.log('Listener 2 called');
});

// Print the number of listeners associated with the emitter
console.log('Number of listeners:', emitter.listenerCount('myEvent'));

// Emit the event, calling both listeners
emitter.emit('myEvent');

// Remove one of the listeners
emitter.removeListener('myEvent', () => {
  console.log('Listener 2 called');
});

// Print the remaining number of listeners
console.log('Number of listeners:', emitter.listenerCount('myEvent'));

// Emit the event again, calling only the remaining listener
emitter.emit('myEvent');