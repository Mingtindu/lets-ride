import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import morgan from "morgan";
import userRouter from "./routes/user.routes.js";
import captainRouter from "./routes/captain.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("ok");
});
app.use("/users", userRouter);
app.use("/captains", captainRouter);

export { app };
