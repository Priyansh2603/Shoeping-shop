import express from 'express';
import { cartUpdate, getCart } from '../controllers/cartcontrollers.js';
const router = express.Router();
router.post("/addcart",cartUpdate)
router.post("/getcart",getCart)
export const cartroute = router;