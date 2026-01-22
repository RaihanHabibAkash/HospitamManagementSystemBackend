import mongoose from "mongoose";

const paitentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    problems: [{
        type: String,
        required: true
    }],
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: [ "Male", "Female" ]
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },

}, { timestamps: true });