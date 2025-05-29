import mongoose, { connect } from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('')
}