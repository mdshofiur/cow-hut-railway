import express, { Express, NextFunction, Request, Response } from "express";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import userRouter from "./modules/user/user.route";
import cors from "cors";
import cowRouters from "./modules/cow/cow.route";
import "dotenv/config";
import ordersRouters from "./modules/orders/order.route";

const app: Express = express();
require("dotenv").config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandlerMiddleware);

app.use(userRouter);
app.use(cowRouters);
app.use(ordersRouters);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

export default app;
