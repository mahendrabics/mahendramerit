import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authentication token from localStorage
    localStorage.removeItem("authToken");

    // Redirect the user to the login page or any other desired page
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
