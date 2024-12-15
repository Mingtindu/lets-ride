import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || token == null) {
      return navigate("/login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        localStorage.removeItem("token");
        navigate("/login");
        setIsLoading(false);
      });
  }, [navigate, setUser]);
  if (isLoading) {
    return <div>Loading ....</div>;
  }
  return <>{children}</>;
};

export default UserProtectedWrapper;
