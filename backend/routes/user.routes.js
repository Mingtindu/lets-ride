import express from "express";
import expressValidator from "express-validator";
import {
  getUserData,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
const { body } = expressValidator;
const router = express.Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must e at least 6 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must e at least 6 characters long"),
  ],
  loginUser
);

router.get("/profile", authUser, getUserData);
router.get("/logout", authUser, logoutUser);

export default router;
