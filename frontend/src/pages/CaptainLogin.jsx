import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        captainData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        setCaptain(data.captain);
        navigate("/captain-home");
      }
    } catch (error) {}
    setEmail("");
    setPassword("");
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 text-lg font-medium mb-2>
            Enter Password
          </h3>
          <input
            className="bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="example@gmail.com"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Register as Fleet?{" "}
          <Link to={"/captain-signUp"} className="text-blue-600">
            Register as Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to={"/login"}
          className="bg-blue-500 text-white items-center flex justify-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
