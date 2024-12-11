import Router from "express";
import { body } from "express-validator";
import {
  getCaptain,
  loginCaptain,
  logoutCaptain,
  registerCaptain,
} from "../controllers/captain.controller.js";
import { authCaptain } from "../middlewares/auth.middleware.js";

const router = Router();
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 3 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate")
      .isInt({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Password must be at least 3 characters long"),
    body("vehicle.type")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Vehicle must be car motocycle and auto"),
  ],
  registerCaptain
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email must be valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 3 characters long"),
  ],
  loginCaptain
);
router.get("/profile", authCaptain, getCaptain);
router.get("/logout", authCaptain, logoutCaptain);

export default router;
