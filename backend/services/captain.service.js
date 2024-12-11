import { captainModel } from "../models/captain.model.js";

const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  type,
}) => {
  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !type
  ) {
    throw Error("All fields are required");
  }
  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      type,
    },
  });

  return captain;
};

const existCaptain = async ({ email }) => {
  const exist = await captainModel.findOne({ email });
  return !!exist;
};

export { createCaptain, existCaptain };
