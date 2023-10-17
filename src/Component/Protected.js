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



