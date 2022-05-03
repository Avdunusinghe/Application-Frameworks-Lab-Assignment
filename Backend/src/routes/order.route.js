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
