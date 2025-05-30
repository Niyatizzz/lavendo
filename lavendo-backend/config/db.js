import mongoose, { connect } from "mongoose";

export const connectDB = async() => {
    await mongoose.connect(
      "mongodb+srv://niyatikolukula:Qwerty%402516@cluster0.tfkkqqa.mongodb.net/lavendo"
    ) .then(() => {
        console.log('DB connected')
    })
}