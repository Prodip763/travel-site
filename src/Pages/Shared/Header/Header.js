import { signOut } from "firebase/auth";
import React from "react";
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap';
import { useAuthState } from "react-firebase-hooks/auth";
import {Link} from 'react-router-dom';
import auth from "../../../firebase.init";
import logo from '../../../images/logo.png'

const Header = () => {
  const [user] =useAuthState(auth);
  const handleSignout = () =>{
    signOut(auth);
  }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo}height={30}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
          </Nav>
          <Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
            <Nav.Link href="home#services">Services</Nav.Link>
            {
              user ?
              <button onClick={handleSignout} className="btn btn-danger">Signout</button>
              :
              <Nav.Link as={Link} to='/login'><button className="btn btn-danger">Login</button></Nav.Link>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};


export default Header;


