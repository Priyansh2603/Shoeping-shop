import mongoose from "mongoose";
const cartItemSchema = new mongoose.Schema({
    Item_id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
    },
    model:{
        type: String,
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    rating:{
        type: Number,
    },
    brand:{
        type: String,
    },
    description:{
        type: String,
    },
    title:{
        type: String,
    },
    category:{
        type: String,
    },
    discountPercentage:{
        type: Number,
    },
    left:{
        type: Number,
    },
    stock:{
        type: Number,
    },
    images:{
        type: [String],
    },
    quantity: { type: Number, default: 1 },
})
const cartSchema = new mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    Username:{type:String, required:true},
    Items : [cartItemSchema],
  }, { timestamps: true }); 
  
  export const Cart = mongoose.model('Cart', cartSchema);
  