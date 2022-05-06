import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/common/UIElements/nav";
import Customer from "./component/customer";
import ItemDetailsComponent from "./component/pages/treder/item-detail/item-detail";
import ItemListComponent from "./component/pages/treder/item-list/item.list.component";
import ItemUpdateComponent from "./component/pages/treder/update/item.update";
import UserDetailsComponent from "./component/pages/user/user-detail/user.detail.component";
import UserListComponent from "./component/pages/user/user-list/user.list.component";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />}></Route>
          <Route path="treder" element={<ItemListComponent />}></Route>
          <Route
            path="treder/itemDetails"
            element={<ItemDetailsComponent />}
          ></Route>
          <Route path="customer" element={<Customer />}></Route>
          <Route path="treder/:id" element={<ItemUpdateComponent />}></Route>
          <Route path="user" element={<UserDetailsComponent />}></Route>
          <Route path="/userList" element={<UserListComponent />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
