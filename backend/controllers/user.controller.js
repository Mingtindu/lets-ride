import userModel from "../models/user.model.js";
import expressValidator from "express-validator";
import { createUser, existUser } from "../services/user.service.js";
import { blacklistModel } from "../models/blacklistToken.model.js";

const { validationResult } = expressValidator;
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const doesUserExist = await existUser({ email });
  if (doesUserExist) {
    return res
      .status(400)
      .json({ message: "User with this email already exist" });
  }
  const hashPassword = await userModel.hashPassword(password);
  console.log(hashPassword);
  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

const loginUser = async (req, res) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.status(200).json({ token, user });
};

const getUserData = async (req, res) => {
  const _id = req.user._id;
  const user = await userModel.findOne({ _id });
  res.status(200).json({ user: user });
};
const logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistModel.create({ token });

  res.status(200).json({ message: "user logged out" });
};

export { registerUser, loginUser, getUserData, logoutUser };
