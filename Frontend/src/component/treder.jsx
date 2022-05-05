import React, { Component, useCallback, useEffect, useState } from "react";
import itemsService from "../services/items.service";

const Treder = () => {
  const [items, setItems] = useState([]);

  const getAllItems = useCallback(() => {
    itemsService.getAllItems().then((response) => {
      setItems(response.data);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    getAllItems();
    console.log(items);
  }, [getAllItems]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Treder;
