import mongoose from "mongoose";

const { Schema, model } = mongoose;

const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "default.png",
    },
    coordinates: {
        longitude: {
            type: Number,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
    },
});

export const Location = model("Location", locationSchema);
