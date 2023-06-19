import express from "express";
import {
  createCow,
  deleteCow,
  getAllCows,
  getSingleCow,
  updateCow,
} from "./cow.controller";

const cowRouters = express.Router();

// Create a new cow
cowRouters.post("/api/v1/cows", createCow);

// Get all cows
cowRouters.get("/api/v1/cows", getAllCows);

// Get a single cow by ID
cowRouters.get("/api/v1/cows/:id", getSingleCow);

// Update a cow by ID
cowRouters.put("/api/v1/cows/:id", updateCow);

// Delete a cow by ID
cowRouters.delete("/api/v1/cows/:id", deleteCow);

export default cowRouters;
