




import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
   const authToken = localStorage.getItem('authToken');
   if (!authToken) {
     navigate('/login');
   }
 }, ); // Add navigate to the dependency array
 

  return (
    <div>
      <Component />
    </div>
  );
}

export default Protected;





// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// // Custom route guard to protect routes
// const Protected = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('authToken') !== null;

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default Protected