import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";
const app = express();

dotenv.config();

// MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// CONNECTIONS
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ordlb80.mongodb.net/test`).then(() => app.listen(5000, () => console.log("Connection Successfull & Listening to Localhost Port 5000"))).catch((error) => console.log(error));
