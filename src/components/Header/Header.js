import logo from '../../e-logo.png';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand > <Image src={logo}></Image>CUIGEAR</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    
    );
};

export default Header;