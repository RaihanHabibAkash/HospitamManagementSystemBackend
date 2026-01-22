import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: [{
        type: String,
        required: true
    }],
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    specializationIn: {
        type: String,
        required: true
    },
    hotlineNumbers: [{
        type: String,
        required: true
    }],
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    }],

}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema);