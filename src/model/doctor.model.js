import mongoose, { Types } from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        default: 0
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    worksInHospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    }],
    numbers: [{
        type: String,
        required: true
    }],
    email: {
        type: String,
        required: false
    },
    paitents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
    }],

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);