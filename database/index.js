// inport mongoose module
const mongoose = require('mongoose');

// mongodb connection string
const connectinString = 'mongodb+srv://dbshrestha:Durga280116@cluster0.kruuz8d.mongodb.net/?appName=Cluster0';

// function to connect to the mongodb database
async function connectToDatabase() {
    await mongoose.connect(connectinString)
    console.log("Connected to MongoDB database successfully");
};
// export the connection function
module.exports = connectToDatabase;