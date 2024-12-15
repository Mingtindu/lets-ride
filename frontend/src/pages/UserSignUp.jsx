import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);

      navigate("/home");
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
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
          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>Privacy policy</div>
    </div>
  );
};

export default UserSignUp;
