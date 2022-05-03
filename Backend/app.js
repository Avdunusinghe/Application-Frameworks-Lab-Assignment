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

//Define Routes
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(itemRouter.routes()).use(itemRouter.allowedMethods());

app.use((ctx) => {
  ctx.body = "AF Assignment Api";
});

app.listen(4000);
console.log("Application Runing On Port 4000");
