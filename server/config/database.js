import mongoose from "mongoose";
export const connectDB = async()=>{
    mongoose
    .connect("mongodb://127.0.0.1:27017/razor", {
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