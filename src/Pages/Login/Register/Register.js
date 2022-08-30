import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import { Toast } from "react-bootstrap";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () =>{
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }

    const handleRegister= e=>{
        e.preventDefault();
        const name = e.target.password.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if(password !== confirmPassword){
            <Toast>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
        }
        createUserWithEmailAndPassword(email, password);

    }
    return(
        <div className="register-form">
            <h1 style={{textAlign: 'center'}}>please Register!!</h1>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Your Name'></input>
                <br></br>
                <input type='email' name='email' placeholder='Enter your email' required></input>
                <br></br>
                <input type='password' name='password' placeholder='Enter your password' required></input>
                <br></br>
                <input type='password' name='confirmPassword' placeholder="Re'type Password" required></input>
                <input type='checkbox' name='terms' id='terms'></input>
                <label htmlFor="terms">Accept Travel Site terms and conditions</label>
                <input className="w-50 mx-auto btn btn-danger mt-2" type='submit' value='Register'></input>
            </form>
            <p>Already have an account? <Link to='/login' className="text-danger pe-auto text-decoration-none"style={{cursor:'pointer'}} onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default Register;