import React, { Component, useState } from "react";
import userService from "../../../../services/user.service";

const UserDetailsComponent = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const userDetails = {
      name,
      mobileNumber,
      password,
      role,
    };

    userService.saveUser(userDetails).then((response) => {
      if (response.status == 201) {
        alert("Saved Data");
        resetForm();
      } else {
        alert("Error Has been occred Pleas Try Again");
      }
    });
  };

  const onChangeRoleValue = (e) => {
    let roleValue = e.target.value;
    console.log(roleValue);
    if (roleValue === "1") {
      setRole(1);
    } else if (roleValue === "2") {
      setRole(2);
    }
  };

  const resetForm = () => {
    setName("");
    setMobileNumber("");
    setPassword("");
    setRole(0);
  };
  return (
    <div>
      <h3>Create Profile</h3>

      <form onSubmit={onSubmitForm}>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br></br>

        <label>Mobile Number</label>
        <br></br>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        ></input>
        <br></br>

        <label>Password</label>
        <br></br>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <div onChange={onChangeRoleValue}>
          Customer
          <input type="radio" value="1" name="customer" />
          Treder
          <input type="radio" value="2" name="treder" />
        </div>

        <button type="submit"> Save</button>
      </form>
    </div>
  );
};

export default UserDetailsComponent;
