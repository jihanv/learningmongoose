
const mongoose = require("mongoose")

const User = require("./User")

//1. Connect to a database, if this database does not exist, it will create it
const mongoURI = "mongodb://localhost/testDB";
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

//Create a user
const user = new User({name: "Kyle", age: 26})

//Add user to database
user.save()