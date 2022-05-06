/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Engineering
 */

const Router = require("@koa/router");
const { placeOrder } = require("../api/order.api");

const router = new Router({
  prefix: "/order",
});

/*
 *@route POST/item
 *@description save Item
 */
router.post("/", (ctx) => {
  const orderObj = ctx.request.body;
  ctx.body = placeOrder(orderObj);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

module.exports = router;
