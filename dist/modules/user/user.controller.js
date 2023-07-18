"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getSingleUser = exports.getAllUsers = exports.createUsers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_service_1 = require("./user.service");
/* -------------------------------------------------------------------------- */
/*                                Create a user                               */
/* -------------------------------------------------------------------------- */
const createUsers = async (req, res) => {
    const { password, role, name, phoneNumber, address, budget, income } = req.body;
    const newUser = {
        _id: new mongoose_1.default.Types.ObjectId(),
        password,
        role,
        name,
        phoneNumber,
        address,
        budget,
        income,
    };
    try {
        const user = await (0, user_service_1.createUsersService)(newUser);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Failed to create user",
            error: error.message,
        });
    }
};
exports.createUsers = createUsers;
/* -------------------------------------------------------------------------- */
/*                                Get all users                               */
/* -------------------------------------------------------------------------- */
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, user_service_1.UsersService)();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Users fetched successfully",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Failed to fetch users",
            error: error.message,
        });
    }
};
exports.getAllUsers = getAllUsers;
/* -------------------------------------------------------------------------- */
/*                               Get single user                              */
/* -------------------------------------------------------------------------- */
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await (0, user_service_1.UserService)(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User fetched successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Failed to fetch user",
            error: error.message,
        });
    }
};
exports.getSingleUser = getSingleUser;
/* -------------------------------------------------------------------------- */
/*                                Update a user                               */
/* -------------------------------------------------------------------------- */
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userUpdate = await (0, user_service_1.updateUserService)(id, req.body);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User updated successfully",
            data: userUpdate,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Failed to update user",
            error: error.message,
        });
    }
};
exports.updateUser = updateUser;
/* -------------------------------------------------------------------------- */
/*                                Delete a user                               */
/* -------------------------------------------------------------------------- */
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userDelete = await (0, user_service_1.deleteUserService)(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User deleted successfully",
            data: userDelete,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Failed to delete user",
            error: error.message,
        });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map