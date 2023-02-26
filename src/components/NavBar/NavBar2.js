import "./NavBar2.scss";
import logo from "../../logoFINAL.png";

// import { Link } from "react-router-dom";
// import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function NavBar2() {
  return (
    <Navbar bg="light" expand="lg" className="navbarestilo">
      <Container>
        <h1> Chacra Deposito</h1>
        <img className="topLogo" src={logo} alt="Logo Depositos" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="barralinks">
          <Nav className="me-c">
            <Nav.Link href="/" className="links">
              Inicio
            </Nav.Link>
            <Nav.Link href="/quienes-somos" className="links">
              Quiénes somos
            </Nav.Link>
            <Nav.Link href="#link" className="links">
              Nuestros depositos
            </Nav.Link>
            {/* POR SI SE QUIERE DROPDOWN
            <NavDropdown
              title="Contacto"
              id="basic-nav-dropdown"
              className="links"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
