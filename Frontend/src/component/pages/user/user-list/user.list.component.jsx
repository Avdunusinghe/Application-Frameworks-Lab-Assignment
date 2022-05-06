import React, { Component, useCallback, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import userService from "../../../../services/user.service";

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const getAllItems = useCallback(() => {
    userService.getClientsDetails().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default UserListComponent;
