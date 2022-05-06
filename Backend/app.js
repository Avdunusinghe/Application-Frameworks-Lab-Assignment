/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Sngineering
 */

//Load Modules

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

//Create Koa App
const app = new Koa();

//Enable Json
app.use(bodyParser());

//Enable Cors
app.use(cors());

//Load Routes
const userRouter = require("./src/routes/user.route");
const itemRouter = require("./src/routes/item.route");
const promotionRouter = require("./src/routes/promotion.route");
const orderRouter = require("./src/routes/order.route");
//Define Routes
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(itemRouter.routes()).use(itemRouter.allowedMethods());
app.use(promotionRouter.routes()).use(promotionRouter.allowedMethods());
app.use(orderRouter.routes()).use(orderRouter.allowedMethods());

app.use((ctx) => {
  ctx.body = "AF Assignment Api";
});

app.listen(4000);
console.log("Application Runing On Port 4000");
