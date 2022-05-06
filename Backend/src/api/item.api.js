/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Sngineering
 */

const { v4: uuidv4 } = require("uuid");

var items = new Map();

/*
 *@description AddItem
 */
const saveItem = ({ name, price }) => {
  try {
    const item = {
      id: uuidv4(),
      name: name,
      price: price,
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    items.set(item.id, item);
  } catch (error) {
    console.error(error);
  }
};

/*
 *@description editItem
 */
const updateItem = ({ id, name, price }) => {
  try {
    let itemsDetis = items.get(id);

    if (itemsDetis != null) {
      const item = {
        name: name,
        price: price,
        updatedOn: new Date(),
      };

      items.set(itemsDetis.id, item);
    } else {
    }
  } catch (error) {
    console.error(error);
  }
};

/*
 *@description viewInventroy
 */
const getAllItem = () => {
  return [...items.values()];
};

/*
 *@description GetItemById
 */

const getIemById = (id) => {
  const item = items.get(id);
  return item;
};

module.exports = {
  saveItem,
  updateItem,
  getAllItem,
  getIemById,
};
