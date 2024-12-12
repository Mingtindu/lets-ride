import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

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
            type="password"
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
            Login
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
