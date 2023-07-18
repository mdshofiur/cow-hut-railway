"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const error_handler_1 = require("./middleware/error-handler");
const user_route_1 = __importDefault(require("./modules/user/user.route"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cow_route_1 = __importDefault(require("./modules/cow/cow.route"));
require("dotenv/config");
const order_route_1 = __importDefault(require("./modules/orders/order.route"));
const port = 1000;
const uri = process.env.DB_URL;
const app = (0, express_1.default)();
require("dotenv").config();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(error_handler_1.errorHandlerMiddleware);
app.use(express_1.default.static('public'));
app.use(user_route_1.default);
app.use(cow_route_1.default);
app.use(order_route_1.default);
app.get("/", (req, res, next) => {
    res.send("Hello Cows Backend");
});
app.listen(port, async () => {
    try {
        await mongoose_1.default.connect(uri);
        console.log("Database is connected");
        console.log(`Example app listening on port ${port}`);
    }
    catch (error) {
        console.log("Database connect error", error);
    }
});
//# sourceMappingURL=server.js.map