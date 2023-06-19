import express from "express";
import {
  createUsers,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "./user.controller";

const userRouter = express.Router();

// Create a new user
userRouter.post("/api/v1/auth/signup", createUsers);

// Get all users
userRouter.get("/api/v1/users", getAllUsers);

// Get a single user by ID
userRouter.get("/api/v1/users/:id", getSingleUser);

// Update a user by ID
userRouter.put("/api/v1/users/:id", updateUser);

// Delete a user by ID
userRouter.delete("/api/v1/users/:id", deleteUser);

export default userRouter;
