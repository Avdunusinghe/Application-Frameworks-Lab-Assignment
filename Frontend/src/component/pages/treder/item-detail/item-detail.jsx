import React, { Component, useState } from "react";
import itemsService from "../../../../services/items.service";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ItemDetailsComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();

  const onSubmitForm = (e) => {
    e.preventDefault();

    const itemDetails = {
      name,
      price,
    };

    itemsService.saveItem(itemDetails).then((response) => {
      if (response.status == 201) {
        alert("Saved Data");
        navigate("/treder" + location.search);
      } else {
        alert("Error Has been occred Pleas Try Again");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <h3>Save Item Details</h3>

      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>

        <label>Price</label>
        <br></br>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br></br>

        <button type="submit"> Save</button>
      </form>
    </div>
  );
};

export default ItemDetailsComponent;
