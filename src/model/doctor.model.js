import mongoose from "mongoose";

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
        required: true
    }],
    numbers: [{
        type: String,
        required: true
    }],
    email: {
        type: String,
        required: false
    },

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema);