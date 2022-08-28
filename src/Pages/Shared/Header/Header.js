import React from "react";
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
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
            <Nav.Link as={Link} to='/service'>Services</Nav.Link>
            <Nav.Link href="#deets">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};


export default Header;


