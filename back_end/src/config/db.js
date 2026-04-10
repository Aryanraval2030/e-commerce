import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDb = async () => {
  mongoose.connect(process.env.PORT_URI);
  console.log("mongo is connected..");
};
