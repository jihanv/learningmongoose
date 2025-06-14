
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

async function run() {
    //Create a new user and add them to the database
    // const user = new User({ name: "Logan", age: 40 });
    // user.save();

    //Alternative way to create a user
    const user = await User.create({name: "John", age: 22})
}


//Connect to mongo first. Then add new user. Make sure it is not run().
connectToMongo().then(run);