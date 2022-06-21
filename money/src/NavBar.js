import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="/discover">Discover</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/watchlist">Watchlist</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/learn">Learn</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
