import Captain from "../models/captain.model.js";

export const createCaptain = async (data) => {
  const captain = new Captain(data);
  await captain.save();
  return captain;
};
