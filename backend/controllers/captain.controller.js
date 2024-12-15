import { captainModel } from "../models/captain.model.js";
import expressValidator from "express-validator";
import { createCaptain, existCaptain } from "../services/captain.service.js";
import { blacklistModel } from "../models/blacklistToken.model.js";

const { validationResult } = expressValidator;
const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;
  const captainExist = await existCaptain({ email });
  if (captainExist) {
    return res.status(400).json({
      message: "Captain with this email already exist",
    });
  }
  const hashPassword = await captainModel.hashPassword(password);

  const captain = await createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    type: vehicle.type,
  });
  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

const loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captainExist = await captainModel.findOne({ email }).select("password");

  if (!captainExist) {
    return res.status(400).json({
      message: "Captain with this email does not exist",
    });
  }

  // Log the provided password for debugging
  console.log(captainExist);

  // Compare the plain password with the hashed password
  const isMatch = await captainExist.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = captainExist.generateAuthToken();
  res.status(200).json({ token, captainExist });
};

const getCaptain = async (req, res) => {
  return res.status(200).json({ captain: req.user });
};

const logoutCaptain = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistModel.create({ token });

  res.status(200).json({ message: "Captain logged out" });
};

export { registerCaptain, loginCaptain, getCaptain, logoutCaptain };
