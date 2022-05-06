/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Sngineering
 */
const { v4: uuidv4 } = require("uuid");

var orders = new Map();

/*
 *@description purches
 */
const placeOrder = (orderObj) => {
  console.log(orderObj);
  try {
    const order = {
      id: uuidv4(),
      totalPrice: orderObj.totalPrice,
      orderItems: [],
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    orderObj.orderItems.forEach((x) => {
      order.orderItems.push(x);
    });
    console.log("======================");
    console.log(order.orderItems);
    orders.set(order.id, order);
    console.log(order);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  placeOrder,
};
