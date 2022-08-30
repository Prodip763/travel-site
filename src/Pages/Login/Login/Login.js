import React, { useRef } from "react";
import {Form, Button} from 'react-bootstrap';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
      let errorElement;
    if(user){
        navigate(from, {replace: true});
    }
    if (error) {
        errorElement = <p className="text-danger">Error: {error?.message}</p>
          

    }

    const handleSubmit =e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    

    const navigateRegister = () =>{
        navigate('/register');
    }
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
    }

    return (
        <div className="container w-50 mx-auto">
            <h1>please Login!!</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Your email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="danger w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Travel Site? <Link to='/register' className="text-danger pe-auto text-decoration-none"style={{cursor:'pointer'}} onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget Password? <Link to='/register' className="text-danger pe-auto text-decoration-none"style={{cursor:'pointer'}} onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default Login;