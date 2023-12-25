import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../models/paymentModel.js";
import { deleteCart } from "./cartcontrollers.js";
let brandf;
let Item_idf;
let user_id;
export const checkout = async (req, res) => {
  try {
  const options = {
    amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
    // model:(String(req.body.model),
    notes: {
      value: req.body.model,
      item: req.body.Item_id,
    },
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  brandf = options.notes.value;
  Item_idf = options.notes.item;
  user_id = req.body.user;
    const order = await instance.orders.create(options);
    const model = req.body.model;
    console.log(model + " checkout")
    console.log(options)
    console.log(order);
    res.status(200).json({
      success: true,
      order,
      model,
    });
  }catch(e){
    console.log("Razoray Error ",e);
    res.status(500).json(e);
  }
      // console.log(options.model)
}
// console.log(model)
// export const paymen2t = async(req,res)=>{
//   const options = {
//       amount: Number(req.body.amount*100),  // amount in the smallest currency unit
//       currency: "INR",
//       receipt: "order_rcptid_11"
//     };
//     const order = await instance.orders.create(options);
//     console.log(req.body);
//       res.status(200).json({
//           success : true,
//           order,
//       });
// }
export const paymentveri = async (req, res) => {

  console.log(req.body + " yes this one");
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, model } = req.body;
  // const model=req.body.model;
  console.log(brandf + " here ", model)
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  //  const crypto = require("crypto");
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET).update(body.toString()).digest('hex');
  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);
  const isAuthentic = expectedSignature === razorpay_signature;
  const brand = brandf;
  const Item_id = Item_idf;
  console.log(user_id)
  if (isAuthentic) {
    // saves in database
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      brand,
      Item_id,
    })
    deleteCart(user_id);
    res.redirect(`http://localhost:3000/pay?reference=${user_id}&order_id=${razorpay_order_id}&payment_id=${razorpay_payment_id}`);
  }
  else {
    res.status(400).json({
      success: false,
      // order,
    });
  }
}