import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Link to="/discover" className="nav-link">
          Discover
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/watchlist" className="nav-link">
          Watchlist
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/learn" className="nav-link">
          Learn
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
