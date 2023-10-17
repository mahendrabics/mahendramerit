import React, { useState } from "react";
import axios from "axios";
import "./ten.css"; 
import { Link } from 'react-router-dom';

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/api/register/", {
                username: username,
                email: email,
                password: password
            });

            
            console.log("Registration successful:", response.data);
            alert("Registration successful!");
        } catch (error) {
            if (error.response && error.response.data) {
                console.error("Registration error:", error.response.data);
                
            } else {
                console.error("Registration error:", error);
                
            }
        }
    }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={username} name="name" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
            <p>Don't have an account? <Link to="/login">Login here.</Link></p>
            
        </div>
    )
}
export default Register;
