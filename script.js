
const mongoose = require("mongoose")

const User = require("./User")
//1. Connect to a database
const mongoURI = "mongodb://localhost:27017";
async function connectToMongo() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoURI);   
    console.log('Mongo connected');
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
}

connectToMongo()

