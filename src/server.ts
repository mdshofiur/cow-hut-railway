import express, { Express, NextFunction, Request, Response } from "express";
import mongoose from 'mongoose';
import { errorHandlerMiddleware } from "./middleware/error-handler";
import userRouter from "./modules/user/user.route";
import cors from "cors";
import cookieParser from "cookie-parser";
import cowRouters from "./modules/cow/cow.route";
import "dotenv/config";
import ordersRouters from "./modules/orders/order.route";

const port: number = 1000;
const uri: any = process.env.DB_URL

const app: Express = express();
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(errorHandlerMiddleware);

app.use(express.static('public'))

app.use(userRouter);
app.use(cowRouters);
app.use(ordersRouters);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Cows Backend");
});

app.listen(port, async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database is connected");
    console.log(`Example app listening on port ${port}`);
  } catch (error) {
    console.log("Database connect error", error);
  }
});
