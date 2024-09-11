// Write a JS to create a Person object using JSON. 
// Store name and age inside object. 
// Print details only of elder person. 


const personsJSON = '[{"name": "Alice", "age": 30}, {"name": "Bob", "age": 55}, {"name": "Charlie", "age": 35}]';

// Parse JSON data into an array of objects
const persons = JSON.parse(personsJSON);

// Determine the number of persons
const numberOfPersons = persons.length;

// Determine the elder person among all
let elderPerson = persons[0];
for (let i = 1; i < persons.length; i++) {
  if (persons[i].age > elderPerson.age) {
    elderPerson = persons[i];
  }
}

console.log("Elder person:", elderPerson);