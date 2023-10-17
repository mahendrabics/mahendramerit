// import React from 'react';
// import { Link } from 'react-router-dom';



// const Nav = () => {
//  return (
//   <div className="sidebar">
//     <div>
//    <ul>
   
//    <li>
//      <Link to="/home">Home</Link>
//      {/* <Link to="/Header/home">Home</Link> */}

//     </li>
//     <li>
//      <Link to="/about">About</Link>
//     </li>
    
//     <li>
//      <Link to="/pie">App</Link>
//     </li>
//     <li>
//      <Link to="/pie-chart">PieChartComponent</Link>
//     </li>

//     <li>
//      <Link to="/bar">BarChartComponent</Link>
//     </li>

//     <li>
//      <Link to="/logout">Logout</Link>
     
//     </li>
    
    
//    </ul>
//    </div>
   
//   </div>
//  );
// };

// export default Nav;




import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div className="nav-container">
      {authToken ? (
        <ul className="nav-ul">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pie">Aps</Link>
          </li>
          <li>
            <Link to="/pie-chart">PieChartComponent</Link>
          </li>
          
          <li>
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          </li>
        </ul>
      ) : 
         <nav className="nav-ul">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
         </nav>
      }
    </div>
  );
};

export default Nav



