import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlenght: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlenght: [3, "First name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    minlength: [5, "Email must be at least 4 characters long "],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlenght: [3, "color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlenght: [3, "plate must be at least 3 characters long"],
    },
    capacity: {
      type: String,
      required: true,
      minlenght: [1, "Capacity must be at least 1"],
    },
    type: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  console.log(this.password);
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);
export { captainModel };
