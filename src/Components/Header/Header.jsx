import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { NavLink } from "react-router";
import Shop from "../Shop/Shop";

const Header = () => {
  
  return (
    
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/orderReview"
        >
          Order Review
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/inventory"
        >
          Manage Inventory
        </NavLink>
      </nav>
    </div>
  );

};

export default Header;
