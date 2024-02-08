import { Auth } from "../models/userauthModel.js";
import bcrypt from 'bcrypt';
import mongoose from "mongoose";
import generateToken from "../config/generateToken.js";
import nodemailer from 'nodemailer'
const saltRounds = 10;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ishudaksh2603@gmail.com',
      pass: 'nwgdoklamdgyuwmc',
    },
  });
  
  // Function to send an email
  async function sendEmail(to, text) {
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: to,
      subject: "Welcome to Shoeping!!",
      text: text,
      // You can also use HTML in the email body:
      // html: '<p>HTML content of the email</p>',
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
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
                    // const resUser = {...user,token:generateToken(user._id)};
                    sendEmail(email, `
                    
                        Welcome to Shoeping!

                        Dear ${email},

                        We warmly welcome you to Shoeping! Thank you for choosing us to embark on your online shopping journey. At Shoeping, we strive to provide an unparalleled shopping experience, tailored to your needs.

                        [Logo: Shoeping Logo](https://example.com/logo.png)

                        Explore a new world of online shopping with us and discover a vast array of products and services. Your satisfaction is our top priority, and we value your trust in us.

                        Thank you once again for joining us at Shoeping. We look forward to serving you and exceeding your expectations.

                        Best regards,
                        The Shoeping Team
                    `);

                    res.status(200).json(user);
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
  console.log('Received!')
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
          sendEmail(email,`{"Dear ${name},}`+'/n'+ "We Welcome you at Shoeping, Thank You for choosing us /n Explore new world of online shopping with us we respect our customers...")
          await Auth.insertMany([data]);
          const userData = await Auth.findOne({email:email});
          if(userData){
            console.log(userData);
            const response = {...userData,exist:"false",token:generateToken(userData._id)};
            console.log(response)
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
    console.log("in getuser user_id:",user_id)
    if(mongoose.Types.ObjectId.isValid(user_id)){
        const user = await Auth.findById(user_id);
        res.json(user);
    }
    else{
        res.send("false")
    }
}
export const updateUser = async(req,res)=>{
    console.log("body ",req.body);
    const {userId} = req.body;
    const updatedData = req.body;
    console.log("In update user_id:",userId)
    if(mongoose.Types.ObjectId.isValid(userId)){
        const newuser = await Auth.findByIdAndUpdate(userId,updatedData,{new:true});
        res.json(newuser)
    }
    else{
        res.send("false")
    }
}
