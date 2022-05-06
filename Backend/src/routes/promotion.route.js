/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Sngineering
 */

const Router = require("@koa/router");
const { savePromotion, getAllPromostions } = require("../api/promotion.api");

const router = new Router({
  prefix: "/promotion",
});

/*
 *@route POST/promotion
 *@description
 */
router.post("/", (ctx) => {
  const promotionDetails = ctx.request.body;
  ctx.body = savePromotion(promotionDetails);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

/*
 *@route GET/promotion
 *@description Get Client Details
 */
router.get("/", (ctx) => {
  ctx.body = getAllPromostions();
  ctx.set("context-Type", "application.json");

  ctx.status = 200;
});

module.exports = router;
