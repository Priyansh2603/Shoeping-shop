import { Cart } from '../models/cartModel.js';
import mongoose from 'mongoose';
export const cartUpdate = async (req, res) => {
    try {
        console.log("Here");
    
        const { cart, UserId, name } = req.body;
        const itemsToAdd = cart.map(item => ({
            Item_id: item.Item_id,
            name: item.name,
            model: item.model,
            img: item.img,
            amount: item.amount,
            rating: item.rating,
            brand: item.brand,
            quantity: item.quantity,
        }));
    
        const itemIdsToAdd = itemsToAdd.map(item => item.Item_id);
    
        // Operation 1: Increment quantity for existing items
        const existingCart = await Cart.findOne({ UserId });
    
        if (existingCart) {
            const updatedQuantities = await Cart.updateOne(
                { UserId, 'Items.Item_id': { $in: itemIdsToAdd } },
                {
                    $inc: itemsToAdd.reduce((acc, item) => {
                        const identifier = `Items.$[elem${item.Item_id}].quantity`;
                        acc[identifier] = 1;
                        return acc;
                    }, {})
                },
                { arrayFilters: itemsToAdd.map(item => ({ [`elem${item.Item_id}.Item_id`]: item.Item_id })) }
            ).exec();
    
            console.log("Updated quantities:", updatedQuantities);
    
            // Operation 2: Add new items to the cart
            const newItems = itemsToAdd.filter(item => !existingCart.Items.some(existingItem => existingItem.Item_id === item.Item_id));
    
            if (newItems.length > 0) {
                const updatedCart = await Cart.findOneAndUpdate(
                    { UserId },
                    {
                        $addToSet: {
                            Items: {
                                $each: newItems.map(item => ({ quantity: 1, ...item }))
                            }
                        }
                    },
                    { new: true }
                ).exec();
                return res.json(updatedCart);
            } else {
                console.log("No new items added.");
                return res.json(existingCart);
            }
        } else {
            // Operation 3: Create a new cart with all items
            const newCart = await Cart.findOneAndUpdate(
                { UserId },
                {
                    $set: { Username: name },
                    $addToSet: { Items: { $each: itemsToAdd.map(item => ({ quantity: 1, ...item })) } }
                },
                { upsert: true, new: true }
            ).exec();
            return res.json(newCart);
        }
    } catch (e) {
        console.error('Error adding or updating cart:', e);
        return res.status(500).json({ error: 'Internal server error from backend' });
    }
    
}
export const getCart = async (req, res) => {
    const { UserId,name } = req.body;
    try {
        // Convert UserId to ObjectId
        
        console.log(typeof(UserId));
        console.log(name);
        const findCart = await Cart.findOne({ UserId: UserId });

        console.log(findCart);
        if (findCart) {
            console.log("Found Cart")
            res.status(200).json(findCart);
        } else {
            res.status(404).json("Not found");
        }
    } catch (e) {
        res.status(500).json("Error finding Cart " + e);
    }
};

// const uniqueItemsToAdd = []
// const existId = [];
// updatedCart.Items.map(element => {
//     existId.push(Number(element.Item_id));
// });
// console.log("Exist Id :",existId)
// itemsToAdd.map(element=>{
//     if(existId.indexOf(element.Item_id)==-1){
//         console.log(element.Item_id)
//         uniqueItemsToAdd.push(element);
//     }
// })
// console.log(uniqueItemsToAdd);
// if (uniqueItemsToAdd.length > 0) {
//     updatedCart.Items.push(uniqueItemsToAdd);
//     updatedCart.Username = name;

//     const savedCart = await updatedCart.save();

//     console.log("Updated cart:", savedCart);
//     return res.json(savedCart);
// } else {
//     console.log("No new items added.");
//     return res.json(updatedCart);
// }