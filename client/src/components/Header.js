import React from "react";
import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import Home from "../pages/Home";

import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <NavbarBrand href="/">Weather°</NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse
            id="responsive-navbar-nav"
            className="justify-content-between">
          </NavbarCollapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}
