import express from "express";
import {config} from "dotenv";
import cors from "cors";
import payroute from "./routes/payroute.js";
import { authroute } from "./routes/authroute.js";
import {cartroute} from "./routes/cartroute.js";
// import {config} from 'dotenv';
import dotenv from 'dotenv';
import { fileURLToPath, URL } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: new URL('config/config.env', import.meta.url) });
console.log(process.env.RAZORPAY_API_KEY)
export const app = express();
app.use(cors({
    origin: 'https://shoeping-shop.vercel.app/'
  }));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.get("/",(req,res)=>{res.send("<h1>Backend of Shoeping running here on render</h1>")})
app.use("/auth",authroute);
app.get("/auth",(req,res)=>{res.send("<h1>Authentication Service...</h1>")})
app.use("/cart",cartroute);
app.use("/api", payroute);
app.get("/api/getkey", (req,res)=>res.status(200).json({ key : process.env.RAZORPAY_API_KEY }));
