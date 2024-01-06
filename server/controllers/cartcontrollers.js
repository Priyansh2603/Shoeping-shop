import { Cart } from '../models/cartModel.js';
import mongoose from 'mongoose';
export const cartUpdate = async (req, res) => {
    try {
        console.log("Here");
    
        const { cart, UserId, name } = req.body;
        console.log(cart);
        const itemsToAdd = cart.map(item => ({
            Item_id: item.id,
            name: item.name,
            model: item.model,
            image: item.image?(item.image):(item.thumbnail),
            price: item.price,
            rating: (item.rating)?(item.rating.rate?item.rating.rate:item.rating):2,
            brand: item.brand,
            description: item.description,
            category: (item.category.name)?item.category.name:item.category,
            title: item.title,
            discountPercentage: item.discountPercentage,
            left: item.left,
            stock: item.stock,
            images: item.images,
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
        return res.status(500).json({ error: 'Internal server error from backend', with: e });
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

export const deleteCart = async(UserId)=>{
    const findCart = await Cart.findOne({ UserId: UserId });
    if(findCart==null) return;
    const cartId = findCart._id;
    const res = await Cart.findByIdAndDelete(cartId);
    console.log("Deleted Cart ",res);
}