import express from "express";
import { createOrder, getOrders } from "./order.controller";

const ordersRouters = express.Router();

// Create a new cow
ordersRouters.post("/api/v1/orders", createOrder);

ordersRouters.get("/api/v1/orders", getOrders);

export default ordersRouters;
