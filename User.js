//File for schema

const mongoose = require("mongoose")

//Define Schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: Number,
    gpa: Number
})

//Create model and export that
module.exports = mongoose.model("User", userSchema)