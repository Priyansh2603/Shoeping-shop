import express from "express";
// Correct import with file extension
import { authLogin, authRegister, getUser, updateUser } from "../controllers/authcontrollers.js";

const router = express.Router();
router.post("/login",authLogin);
router.post("/register",authRegister);
router.post("/getuser",getUser);
router.patch("/update/:userId",updateUser);
export const authroute = router;