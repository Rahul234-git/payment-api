import express  from "express";
import { checkout,paymentVerification } from "../Controller/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.route("/checkout").post(checkout)
paymentRouter.route("/paymentverification").post(paymentVerification)


export default paymentRouter;