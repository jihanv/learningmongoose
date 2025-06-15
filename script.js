
const mongoose = require("mongoose")

const User = require("./User")

//1. Connect to a database, if this database does not exist, it will create it
const mongoURI = "mongodb://localhost/testDB";
async function connectToMongo() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoURI);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("MongoDB Connected successfully.");
        });

        // Event listener for connection errors
        connection.on("error", (err) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running.", err);
        });
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
    const user = await User.create({ name: "Liam", age: 25 })

    console.log("Run!")
}


//Connect to mongo first. Then add new user. Make sure it is not run().
connectToMongo().then(run);