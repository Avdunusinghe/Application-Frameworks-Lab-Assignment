import React, { Component, useCallback, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import promotionService from "../../../services/promotion.service";

const PromotionListComponent = () => {
  const [promotions, setPromotion] = useState([]);

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getAllPromotions();
  }, [getAllPromotions]);

  const getAllPromotions = useCallback(() => {
    promotionService.getPromotionList().then((response) => {
      setPromotion(response.data);
    });
  }, []);

  const handelSavePromotion = () => {
    navigate("./promostionDetails" + location.search);
  };

  return (
    <div>
      <button onClick={handelSavePromotion}> Add New Promotion</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {promotions.map((item, key) => (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default PromotionListComponent;
