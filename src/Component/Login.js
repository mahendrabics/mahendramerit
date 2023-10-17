import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import { storeToken } from "./tokenStorage"



export const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    const lastEnteredUsername = localStorage.getItem('lastEnteredUsername');
    if (lastEnteredUsername) {
      setUsername(lastEnteredUsername);
    }
    
    
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/api/login/", {
        username: username,
        password: pass
      });

      console.log("API Response:", response.data);

      const authToken = response.data.token;
      localStorage.setItem('authToken', authToken);


      localStorage.setItem('lastEnteredUsername', username);

      console.log("Received authToken:", authToken);

      if (authToken) {
        console.log("Storing authToken in cache");
        storeToken(authToken);
        console.log("Token stored in cache");
        
          navigate('/Header');
          
        
        
        
        alert("Login successful!");
      }
    } catch (error) {
      console.error("API error:", error);

      if (error.response && error.response.data) {
        console.error("API error data:", error.response.data);
        setErrorMessage("Credentials incorrect.");
      }
    }
  }

  return (
    
  
    <div className="auth-form-container">
      
      
       <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" id="username" name="username" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">LogIn</button>
        
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <p>Don't have an account? <Link to="/register">Register here.</Link></p>
      

    </div>
  );
}


export default Login



