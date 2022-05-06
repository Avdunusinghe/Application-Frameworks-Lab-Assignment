import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <h1>Welcome AF Assignment 2 IT20025526 Dunusinghe.A.V</h1>
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
        <li>
          <Link to="/userList">User List</Link>
        </li>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <li>
          <Link to="/promostion">Promotions</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default NavBar;
