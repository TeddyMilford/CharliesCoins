import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/stocks">Stocks</NavLink>
      <NavLink to="/cryptocurrency">Cryptocurrency</NavLink>
      <NavLink to="/commodities">Commodities</NavLink>
    </div>
  );
};

export default NavBar;
