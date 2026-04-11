import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo is connected..");
  } catch (error) {
    console.log("MongoDB connection error", error.message);
    process.exit(1); // web site stop if db is not connected 
  }
};
