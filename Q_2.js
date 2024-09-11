// Write a JS to store an array of objects having height and name. 
// Display names by sorting an array according to height. 

data = 
    [
        {"height":156,"name":"Krishna"},
        {"height":178,"name":"Rumesha"},
        {"height":145,"name":"Khushi"},
    ]

// Sort the array by height in ascending order
data.sort((a, b) => a.height - b.height);

// Extract and display the names in sorted order
const sortedNames = data.map(person => person.name);
console.log("Ascending Order",sortedNames);

// Sort the array by height in descending order
data.sort((a, b) => b.height - a.height);

// Extract and display the names in sorted order
const sortedNames1 = data.map(person => person.name);
console.log("Descending Order",sortedNames1);