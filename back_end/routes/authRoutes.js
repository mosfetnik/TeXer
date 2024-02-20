import express from "express"
import { login,logout,signup } from "../controller/authController.js";

const router = express.Router();


//creating routes
router.get("/signup",signup)
router.get("/login",login)
router.get("/logout",logout)

export default router;