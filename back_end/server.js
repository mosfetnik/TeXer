import  express from 'express';
import dotenv from 'dotenv';
import findConfig from 'find-config';
dotenv.config({ path: findConfig('.env') });

import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectToMongoDB from './db/connectionDB.js';


const app = express();
dotenv.config()
const PORT =process.env.PORT ;



// middleware
app.use(express.json());
app.use(cookieParser())
// Authentication Route

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/user",userRoutes)


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Listen on ${PORT}`)
})




































