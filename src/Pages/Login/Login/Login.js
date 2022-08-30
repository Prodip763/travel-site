import React, { useRef } from "react";
import {Form, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit =e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateRegister = () =>{
        navigate('/register');
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
                <Button className="mx-auto d-block" variant="danger" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Travel Site? <Link to='/register' className="text-danger pe-auto text-decoration-none"style={{cursor:'pointer'}} onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};


export default Login;