import React from 'react';
import bionicslogo from '../Photos/bionicslogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';


export const Navbar2 = () => {
    return (
        <Navbar collapseOnSelect bg="blue" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src= {bionicslogo} width="60" height="60"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/grasp">
                        <a class="navbar-white-font text-white">GRASP</a>
                    </Nav.Link>
                    <Nav.Link href="/teams">
                        <a class="navbar-white-font text-white">TEAMS</a>
                    </Nav.Link>
                    <Nav.Link href="/join">
                        <a class="navbar-white-font text-white">JOIN US</a>
                    </Nav.Link>
                    <Nav.Link href="/sponsor">
                        <a class="navbar-white-font text-white">SPONSORS</a>
                    </Nav.Link>
                    <Nav.Link href="/contactform">
                        <a class="navbar-white-font text-white">CONTACT US</a>
                    </Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        
    )

}