import mongoose  from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection established...")
    } catch (error) {
        console.error("MongoDB connection was not established...")
        process.exit(1)
    }
}

export default connectDB