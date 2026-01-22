import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    medicalRecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
        required: true
    },
    chechkedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
    }],

}, { timestamps: true });

export const Patient = mongoose.modell("Patient", patientSchema);