import express from "express";
// Correct import with file extension
import { authLogin, authRegister, getUser } from "../controllers/authcontrollers.js";

const router = express.Router();
router.post("/login",authLogin);
router.post("/register",authRegister);
router.post("/getuser",getUser);
export const authroute = router;