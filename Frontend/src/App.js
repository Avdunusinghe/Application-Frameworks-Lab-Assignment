import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/common/UIElements/nav";
import Customer from "./component/customer";
import TrederComponent from "./component/pages/treder/treder-list/treder.list.component.jsx";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/"></Route>
          <Route
            path="treder"
            element={<TrederComponent></TrederComponent>}
          ></Route>
          <Route path="customer" element={<Customer></Customer>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
