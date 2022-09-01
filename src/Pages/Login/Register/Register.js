import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import image from '../../../images/logo.png';

const Register = () =>{
    const [agree, setAgree] =useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        console.log('user', user);
    }
    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister= async(e)=>{
        e.preventDefault();
        const name = e.target.password.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if(password !== confirmPassword){
            alert("password didn't match");
        }
        
       
           await createUserWithEmailAndPassword(email, password);
           await updateProfile({ displayName: name });
           navigate('/home');
        

        // createUserWithEmailAndPassword(email, password, confirmPassword);
        

    }
    return(
        <div className="register-form">
            <img className="w-50 mb-2" src={image}></img>
            <form onSubmit={handleRegister}>
                <input type='text'className="form-control" name='name' placeholder='Your Name'></input>
                <br></br>
                <input type='email' className="form-control" name='email' placeholder='Enter your email' required></input>
                <br></br>
                <input type='password' className="form-control" name='password' placeholder='Enter your password' required></input>
                <br></br>
                <input type='password' className="form-control" name='confirmPassword' placeholder="Re'type Password" required></input>
                <input onClick={()=> setAgree(!agree)} type='checkbox' name='terms' id='terms'></input>
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Travel Site terms and conditions</label>
                <input disabled={!agree} className="w-50 mx-auto btn btn-danger mt-2" type='submit' value='Register'></input>
            </form>
            <p>Already have an account? <Link to='/login' className="text-danger pe-auto text-decoration-none"style={{cursor:'pointer'}} onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default Register;

<div className="form-group">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Where to" />
        </div>