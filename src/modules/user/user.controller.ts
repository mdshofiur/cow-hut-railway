import mongoose from "mongoose";
import { Request, Response } from "express";
import {
  createUsersService,
  deleteUserService,
  updateUserService,
  UserService,
  UsersService,
} from "./user.service";

/* -------------------------------------------------------------------------- */
/*                                Create a user                               */
/* -------------------------------------------------------------------------- */
export const createUsers = async (req: Request, res: Response) => {
  const { password, role, name, phoneNumber, address, budget, income } =
    req.body;
  const newUser = {
    _id: new mongoose.Types.ObjectId(),
    password,
    role,
    name,
    phoneNumber,
    address,
    budget,
    income,
  };

  try {
    const user = await createUsersService(newUser);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to create user",
      error: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                Get all users                               */
/* -------------------------------------------------------------------------- */

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UsersService();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                               Get single user                              */
/* -------------------------------------------------------------------------- */

export const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await UserService(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                Update a user                               */
/* -------------------------------------------------------------------------- */

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userUpdate = await updateUserService(id, req.body);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User updated successfully",
      data: userUpdate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to update user",
      error: error.message,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                                Delete a user                               */
/* -------------------------------------------------------------------------- */

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userDelete = await deleteUserService(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User deleted successfully",
      data: userDelete,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to delete user",
      error: error.message,
    });
  }
};
