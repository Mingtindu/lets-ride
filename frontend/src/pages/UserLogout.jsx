import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserLogout;
