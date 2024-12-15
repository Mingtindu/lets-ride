import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        type: vehicleType,
        capacity: vehicleCapacity,
        plate: vehiclePlate,
        color: vehicleColor,
      },
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (response.status === 201) {
        localStorage.setItem("token", data.token);
        setCaptain(data.captain);
        navigate("/captain-home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base w-1/2 font-medium mb-2">Full Name</h3>
          <div className="flex gap-4">
            <input
              className="bg-[#eeee] w-1/2 mb-5 rounded px-4 py-2 border  text-base placeholder:text-base"
              required
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              className="bg-[#eeee] w-1/2 mb-5 rounded px-4 py-2 border  text-base placeholder:text-base"
              required
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </div>
          <h3 text-base font-medium mb-2>
            What's your email
          </h3>
          <input
            className="bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 text-base font-medium mb-2>
            Enter Password
          </h3>
          <input
            className="bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <h3 className="text-base font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-2 flex-col ">
            <div className="flex gap-2">
              <input
                className="bg-[#eeee] mb-5 rounded px-4 py-y border w-1/2 text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Color"
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <select
                className="bg-[#eeee] mb-5 rounded px-4 py-y border w-1/2 text-lg placeholder:text-base"
                name=""
                id=""
                onChange={(e) => {
                  setVehicleType(e.target.value);
                }}
              >
                <option value="car">car</option>
                <option value="auto">auto</option>
                <option value="motorcycle">motorcycle</option>
              </select>
            </div>
            <div className="flex gap-2">
              <input
                className="bg-[#eeee] mb-5 rounded px-4 py-y border w-1/2 text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Capacity"
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />
              <input
                className="bg-[#eeee] mb-5 rounded px-4 py-y border w-1/2 text-lg placeholder:text-base"
                type="text"
                placeholder="Vehicle Plate [115-25]"
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Sign Up Captain
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <p>This is privacy and policy</p>
      </div>
    </div>
  );
};

export default CaptainSignUp;
