import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";
import dotenv from 'dotenv';
import { fileURLToPath, URL } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: new URL('config/config.env', import.meta.url) });
connectDB();
console.log("PORT:",process.env.PORT)
console.log("Razorpay:",process.env.RAZORPAY_API_KEY)
console.log("Secert:",process.env.JWT_SECRET)
export const instance  = new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret : process.env.RAZORPAY_API_SECRET,
});
app.listen(process.env.PORT, ()=>console.log(`Server is running on ${process.env.PORT}`));