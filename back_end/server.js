import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/config/db.js";
import allRoutes from "./src/routes/allRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use("/api", allRoutes);

const serverStart = async () => {
  try {
    await connectDb();

    const port = process.env.PORT;

    app.listen(port, () => {
      console.log(`server is runing..${port}`);
    });
  } catch (error) {
    console.error("Server error:", error.message);
    process.exit(1);
  }
};

// async errors
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  process.exit(1);
});

// sync errors
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1);
});

serverStart();
