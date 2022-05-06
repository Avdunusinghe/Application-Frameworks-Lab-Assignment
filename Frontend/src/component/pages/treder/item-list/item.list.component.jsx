import React, { Component, useCallback, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import itemsService from "../../../../services/items.service";

const ItemListComponent = () => {
  const [items, setItems] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const getAllItems = useCallback(() => {
    itemsService.getAllItems().then((response) => {
      setItems(response.data);
    });
  }, []);

  const handelItemSave = () => {
    navigate("./itemDetails" + location.search);
  };

  return (
    <div>
      <button onClick={handelItemSave}> Add New Item</button>

      <table>
        <thead>
          <tr>
            <td>Actions</td>
            <th>Name</th>
            <th>Price</th>
            <th>CreatedOn</th>
            <th>UpdatedOn</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <td>
                <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`${item.id}`}
                  key={item.id}
                >
                  Update
                </Link>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{moment(item.createdOn).format("YYYY-MM-DDTHH:mm")}</td>
              <td>{moment(item.updatedOn).format("YYYY-MM-DDTHH:mm")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default ItemListComponent;
