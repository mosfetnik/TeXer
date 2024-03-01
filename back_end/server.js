import express from "express";
import dotenv from "dotenv";
import findConfig from "find-config";
dotenv.config({ path: findConfig(".env") });
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectionDB.js";
import cors from 'cors'



const app = express();
const PORT = process.env.PORT;


// ENV file
dotenv.config();


// middleware
app.use(express.json());
app.use(cookieParser());
// app.use(cors())


// Authentication Route
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Listen on ${PORT}`);
});
