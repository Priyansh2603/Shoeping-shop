import mongoose from "mongoose";
import dotenv from 'dotenv';
import { fileURLToPath, URL } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: new URL('config/config.env', import.meta.url) });
export const connectDB = async()=>{
  console.log("Database",process.env.MONGO_URI);
    mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("database connected");
    })
    .catch(err => {
      console.log("Could not connect", err);
    });
  
}