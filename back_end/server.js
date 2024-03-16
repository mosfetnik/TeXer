import  path  from "path";
import express from "express";
import dotenv from "dotenv";
import findConfig from "find-config";
dotenv.config({ path: findConfig(".env") });
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./db/connectionDB.js";
import {app,server } from './socket/socket.js'


const PORT = process.env.PORT;

const __dirname = path.resolve();
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


app.use(express.static(path.join(__dirname,"/front_end/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"front_end","dist","index.html"))
})
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Listen on ${PORT}`);
});
