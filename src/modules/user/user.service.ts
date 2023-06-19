import { UserModel } from "./user.model";

/* -------------------------------------------------------------------------- */
/*                            Create a user service                           */
/* -------------------------------------------------------------------------- */
export const createUsersService = async (newUser) => {
  const user = await UserModel.create(newUser);
  return user;
};

 /* -------------------------------------------------------------------------- */
 /*                            Get all users service                           */
 /* -------------------------------------------------------------------------- */
export const UsersService = async () => {
  const users = await UserModel.find();
  return users;
};

/* -------------------------------------------------------------------------- */
/*                           Get single user service                          */
/* -------------------------------------------------------------------------- */

export const UserService = async (id: any) => {
  const user = await UserModel.findById(id);
  return user;
};

/* -------------------------------------------------------------------------- */
/*                            Update a user service                           */
/* -------------------------------------------------------------------------- */

export const updateUserService = async (userId: any, data: any) => {
  const updateUser = await UserModel.updateOne({ _id: userId }, data);
  return updateUser;
};


/* -------------------------------------------------------------------------- */
/*                             Delete user service                            */
/* -------------------------------------------------------------------------- */
export const deleteUserService = async (userId:any) => {
   const userDelete = await UserModel.deleteOne({ _id: userId });
   return userDelete;
};
