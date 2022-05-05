import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/common/UIElements/nav";
import Customer from "./component/customer";
import Treder from "./component/treder";
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/"></Route>
          <Route path="treder" element={<Treder></Treder>}></Route>
          <Route path="customer" element={<Customer></Customer>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
