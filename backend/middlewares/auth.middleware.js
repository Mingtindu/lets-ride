import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { blacklistModel } from "../models/blacklistToken.model.js";
import { captainModel } from "../models/captain.model.js";

const authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized " });
  }
  const isBlacklisted = await blacklistModel.findOne({
    token: token,
  });
  if (isBlacklisted) {
    return res.status(401).json({
      message: "Unauthorized ",
    });
  }
  console.log(token);
  console.log(process.env.JWT_SECRET);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return res.status().json({ message: "Unauthorized" });
  }
};
const authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized " });
  }
  const isBlacklisted = await blacklistModel.findOne({
    token: token,
  });
  if (isBlacklisted) {
    return res.status(401).json({
      message: "Unauthorized ",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await captainModel.findById(decoded._id);
    req.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return res.status().json({ message: "Unauthorized" });
  }
};

export { authUser, authCaptain };
