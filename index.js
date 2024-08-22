const express = require('express');

const app = express();

// Setting up the server
const PORT = process.env.PORT || 8000


app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`);
});


// Endpoint 1: Array of numbers
app.get('/numbers', (request, response) => {
    response.json([1, 3, 7, 42, 99]);
});

// Endpoint 2: Array of objects
app.get('/users', (request, response) => {
    response.json([
        { name: "Alice", age: 30, occupation: "Engineer" },
        { name: "Bob", age: 25, occupation: "Designer" }
    ]);
});

// Endpoint 3: Array of strings
app.get('/languages', (request, response) => {
    response.json(["JavaScript", "Python", "Java", "C++", "Ruby"]);
});


