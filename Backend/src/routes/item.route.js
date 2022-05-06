const Router = require("@koa/router");
const {
  saveItem,
  updateItem,
  getAllItem,
  getIemById,
} = require("../api/item.api");

const router = new Router({
  prefix: "/item",
});

/*
 *@route POST/item
 *@description save Item
 */
router.post("/", (ctx) => {
  const itemDetails = ctx.request.body;
  ctx.body = saveItem(itemDetails);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

/*
 *@route PUT/item
 *@description Update Item
 */
router.put("/", (ctx) => {
  const itemDetails = ctx.request.body;
  ctx.body = updateItem(itemDetails);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

/*
 *@route GET/item
 *@description Get All Item
 */
router.get("/", (ctx) => {
  ctx.body = getAllItem();
  ctx.set("context-Type", "application.json");
  ctx.status = 200;
});

//@route GET/item/id
//@description get getitemByid
router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getIemById(id);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

module.exports = router;
