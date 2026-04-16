import mongoose from "mongoose";
import type { IUser } from "../types.js";

export const userSchema = new mongoose.Schema<IUser, mongoose.Model<IUser>>({
    id :{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    gender_probability: {
        type: Number,
        required: true
    },
    sample_size: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    age_group: {
        type: String,
        enum: ["child", "teenager", "adult", "senior"],
        required: true
    },
    country_id: {
        type: String,
        required: true
    },
    country_probability: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('User', userSchema);