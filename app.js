// import express module
const express = require('express');

// import database connection function
const connectToDatabase = require('./database');


// create an express application
const app = express();

// connect to the mongodb database
connectToDatabase();

// create a route for the root URL
app.get('/', (req, res) => {
    const durga =({
        name: "Durga Bahadur Shrestha",
        age: 32,
        profession: "Mern Stack Developer"
    });
    res.json({
        message: "Welcome to the MERN Stack 2.0 Application",
        user: durga
    });
});




// define a port numbar and start the server
app.listen(3000, () =>{
    console.log("Server is runnning on port 3000");
});