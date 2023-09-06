import express from "express";
import { checkout, paymentveri } from "../controllers/paycontrollers.js";
const router = express.Router();
router.route("/checkout").post(checkout);
router.route("/paymentveri").post(paymentveri);
export default router;