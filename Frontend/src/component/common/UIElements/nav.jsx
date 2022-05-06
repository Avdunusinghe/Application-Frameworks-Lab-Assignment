import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h1>Se</h1>
      <ul>
        <li>
          <Link to="/treder">Treder</Link>
        </li>
        <li>
          <Link to="/customer">Customer</Link>
        </li>
        <li>
          <Link to="/user">Create Profile</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default NavBar;
