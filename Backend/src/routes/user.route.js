/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Sngineering
 */
const Router = require("@koa/router");
const { saveUser, getClientsDetails } = require("../api/user.api");

const router = new Router({
  prefix: "/user",
});

/*
 *@route POST/user
 *@description
 */
router.post("/", (ctx) => {
  const userDetails = ctx.request.body;
  ctx.body = saveUser(userDetails);
  ctx.set("content-type", "application.json");
  ctx.status = 201;
});

/*
 *@route GET/user
 *@description Get Client Details
 */
router.get("/", (ctx) => {
  ctx.body = getClientsDetails();
  ctx.set("context-Type", "application.json");

  ctx.status = 200;
});
module.exports = router;
