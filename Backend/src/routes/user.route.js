const Router = require("@koa/router");
const { saveUser } = require("../api/user.api");

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

module.exports = router;
