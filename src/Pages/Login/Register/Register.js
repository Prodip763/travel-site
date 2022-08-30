import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';

const Register = () =>{
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    const handleRegister= e=>{
        e.preventDefault();
        const name = e.target.password.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

    }
    return(
        <div className="register-form">
            <h1 style={{textAlign: 'center'}}>please Register!!</h1>
            <from onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Your Name'></input>
                <br></br>
                <input type='email' name='email' placeholder='Enter your email' required></input>
                <br></br>
                <input type='password' name='password' placeholder='Enter your password' required></input>
                <br></br>
                <input type='password' name='password' placeholder="Re'type Password" required></input>
                <input type='submit' value='Register'></input>
            </from>
            <p>Already have an account? <Link to='/login' className="text-danger pe-auto text-decoration-none"style={{cursor:'pointer'}} onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};


export default Register;