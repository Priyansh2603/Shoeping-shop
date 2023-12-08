import { Auth } from "../models/userauthModel.js";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
const saltRounds = 10;
export const authLogin= async(req,res)=>{
    const {email,password} = req.body;
    console.log(email," ",password)
    try{
        const user = await Auth.findOne({email:email});
        if(user){
            bcrypt.compare(password, user.password, (compareErr, result) => {
                if (compareErr) {
                  console.error('Error comparing passwords:', compareErr);
                }
                if (result) {
                    res.status(200).json(user)
                    console.log(user)
                  console.log('Password Matched! Login Successful');
                } else {
                    res.send("Incrorrect")
                  console.log('Incorrect Password. Login Failed');
                }
              });
        }
        else {
            res.json("notexist");
        }
    }catch(e){
        console.log(e);
        res.json("Error");
    }

}
export const authRegister = async(req,res)=>{
    const {name,lastname,email,password,picture,gender,age,interests,} = req.body;
    try{
        const user = await Auth.findOne({email:email});
        if(user){
            const response = {...user,exist:"true"}
            return res.status(500).json(response);
        }
        try {
            const hashPass = bcrypt.hashSync(password, saltRounds);
            // Store the 'hash' value in your database for this user
           
        const data = {
            name: name,
            lastname: lastname,
            email: email,
            password: hashPass,
            picture: picture,
            gender: gender,
            age: age,
            interests: interests,
          };
          console.log(data)
          await Auth.insertMany([data]);
          const userData = await Auth.findOne({email:email});
          if(userData){
            console.log(userData);
            const response = {...userData,exist:"false"}
            res.status(201).json(response); 
          }
          console.log('Hashed Password:', hashPass);
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json('Error creating user');
        }
    }catch(e){
        console.error('Error checking for existing user:', e);
        res.status(500).json('Error checking for existing user');
    }
}
export const getUser = async(req,res)=>{
    const {user_id} = req.body;
    console.log("user_id:",user_id)
    if(mongoose.Types.ObjectId.isValid(user_id)){
        const user = await Auth.findById(user_id);
        res.json(user);
    }
    else{
        res.send("false")
    }
}
