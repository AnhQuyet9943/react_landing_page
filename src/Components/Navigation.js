import React from "react";
import {Navbar,Nav,NavDropdown}  from "react-bootstrap";

function Navigation() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"  >
        <Navbar.Brand href="#home" className="pl-5">Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">  
          </Nav>
          <Nav className="pr-5">
            <Nav.Link href="#header">Header</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#clients">Clients</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
