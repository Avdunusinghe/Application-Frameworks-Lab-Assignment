import React, { Component, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import itemsService from "../../../../services/items.service";
import orderService from "../../../../services/order.service";
const ItemCustomerListComponent = () => {
  const [items, setItems] = useState([]);
  let [, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  const getAllItems = useCallback(() => {
    itemsService.getAllItems().then((response) => {
      setItems(response.data);
    });
  }, []);

  const haddlePurches = (orderObj, totalPrice) => {
    const orderDetails = {
      items: orderObj,
      totalPrice,
    };
    orderService.buyItems(orderDetails).then((response) => {
      if (response.status == 201) {
        alert("sucess");
      }
    });
  };

  const addToCart = (item) => {
    setCartItems(item);
  };

  return (
    <div>
      {items.map((item, key) => (
        <div key={key}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <p>Sale</p>
          <p>
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}

      <div>
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPrice}
        <button onClick={haddlePurches}>Buy Now</button>
      </div>
    </div>
  );
};

export default ItemCustomerListComponent;
