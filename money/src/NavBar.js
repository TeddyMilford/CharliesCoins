import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/stocks">Stocks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cryptocurrency">Cryptocurrency</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/commodities">Commodities</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
