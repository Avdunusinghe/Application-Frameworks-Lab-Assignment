import React, { Component, useCallback, useEffect, useState } from "react";
import itemsService from "../services/items.service";

const Treder = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const getAllItems = useCallback(() => {
    itemsService.getAllItems().then((response) => {
      setItems(response.data);
    });
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const itemDetails = {
      name,
      price,
    };

    itemsService.saveItem(itemDetails).then((response) => {
      if (response.status == 201) {
        alert("Saved Data");
        getAllItems();
      } else {
        alert("Error Has been occred Pleas Try Again");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setPrice(0);
  };

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>

        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br></br>

        <button type="submit"> Save</button>
      </form>
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
