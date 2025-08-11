import User from "../models/user.model.js";

export const createUser = async (userData) => {
  if (
    !userData.fullName ||
    !userData.fullName.first ||
    !userData.fullName.last ||
    !userData.email ||
    !userData.password
  ) {
    throw new Error("All fields are required.");
  }

  const user = new User(userData);
  await user.save();
  return user;
};
