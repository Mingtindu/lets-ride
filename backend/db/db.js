import mongoose from "mongoose";

const connectDb = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Db connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { connectDb };
