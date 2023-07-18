"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cow_controller_1 = require("./cow.controller");
const cowRouters = express_1.default.Router();
// Create a new cow
cowRouters.post("/api/v1/cows", cow_controller_1.createCow);
// Get all cows
cowRouters.get("/api/v1/cows", cow_controller_1.getAllCows);
// Get a single cow by ID
cowRouters.get("/api/v1/cows/:id", cow_controller_1.getSingleCow);
// Update a cow by ID
cowRouters.put("/api/v1/cows/:id", cow_controller_1.updateCow);
// Delete a cow by ID
cowRouters.delete("/api/v1/cows/:id", cow_controller_1.deleteCow);
exports.default = cowRouters;
//# sourceMappingURL=cow.route.js.map