import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\nMongoDB connected✅ DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB Connection Error::", error)
        process.exit(1)
    }
}