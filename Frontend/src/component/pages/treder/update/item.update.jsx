import React, { Component, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import itemsService from "../../../../services/items.service";
const ItemUpdateComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  useEffect(() => {
    console.log(params.id);
    itemsService.getItemById(params.id).then((response) => {
      setName(response.data.name);
      setPrice(response.data.price);
    });
    onSubmitForm.bind(this);
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const itemDetails = {
      id: params.id,
      name,
      price,
    };

    itemsService.updateItem(itemDetails).then((response) => {
      if (response.status == 201) {
        alert("Data Updated Successfully");
        navigate("/treder" + location.search);
      } else {
        alert("Error Has been occred please Try Again");
      }
    });
  };

  return (
    <div>
      <h3>Item Update</h3>

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

        <button type="submit"> Update item</button>
      </form>
    </div>
  );
};

export default ItemUpdateComponent;
