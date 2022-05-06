import React, { Component, useState } from "react";
import promotionService from "../../../services/promotion.service";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const PromotionDetailComponent = () => {
  const [name, setName] = useState("");
  const [discount, setMobileNumber] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();

    const userDetails = {
      name,
      discount,
    };

    promotionService.saveUser(userDetails).then((response) => {
      if (response.status == 201) {
        alert("Saved Data");
        navigate("/promotion" + location.search);
      } else {
        alert("Error Has been occred Pleas Try Again");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setMobileNumber("");
    setPassword("");
    setRole(0);
  };
  return (
    <div>
      <h3>Add New Promotion</h3>

      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>

        <label>Discount</label>
        <br></br>
        <input
          type="text"
          value={discount}
          onChange={(e) => setMobileNumber(e.target.value)}
        ></input>
        <br></br>

        <button type="submit"> Save</button>
      </form>
    </div>
  );
};

export default PromotionDetailComponent;
