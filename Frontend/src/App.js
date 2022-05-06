import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/common/UIElements/nav";
import Customer from "./component/customer";
import ItemDetailsComponent from "./component/pages/treder/item-detail/item-detail";
import ItemListComponent from "./component/pages/treder/item-list/item.list.component";
import ItemUpdateComponent from "./component/pages/treder/update/item.update";
import UserDetailsComponent from "./component/pages/user/user-detail/user.detail.component";
import UserListComponent from "./component/pages/user/user-list/user.list.component";
import ItemCustomerListComponent from "./component/pages/treder/item-customer-list/item.customer.list.component";
import PromotionListComponent from "./component/Promotion/promotion-list/promotion.list.component";
import PromotionDetailComponent from "./component/Promotion/promotion-detail/promotion.detail.component";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Routes>
          <Route path="/"></Route>
          <Route path="treder" element={<ItemListComponent />}></Route>
          <Route
            path="treder/itemDetails"
            element={<ItemDetailsComponent />}
          ></Route>
          <Route path="customer" element={<Customer />}></Route>
          <Route path="treder/:id" element={<ItemUpdateComponent />}></Route>
          <Route path="user" element={<UserDetailsComponent />}></Route>
          <Route path="/userList" element={<UserListComponent />}></Route>
          <Route
            path="/shopping"
            element={<ItemCustomerListComponent />}
          ></Route>
          <Route
            path="/promostion"
            element={<PromotionListComponent />}
          ></Route>
          <Route
            path="promostion/promostionDetails"
            element={<PromotionDetailComponent />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
