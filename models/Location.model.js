import mongoose from "mongoose";

const { Schema, model } = mongoose;

const locationSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "default.png",
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        postal_code: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    contact: {
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    additional_info: {
        website: {
            type: String,
        },
        days_of_operation: {
            type: [String],
            required: true,
        },
        business_hours: {
            opening: {
                type: String,
                required: true,
            },
            closing: {
                type: String,
                required: true,
            },
        },
        coordinates: {
            latitude: {
                type: Number,
                required: true,
            },
            longitude: {
                type: Number,
                required: true,
            },
        },
        social_media: {
            facebook: {
                type: String,
            },
            twitter: {
                type: String,
            },
            linkedin: {
                type: String,
            },
        },
    },
});
export const Location = model("Location", locationSchema);
