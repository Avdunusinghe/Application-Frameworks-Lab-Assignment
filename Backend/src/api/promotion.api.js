const { v4: uuidv4 } = require("uuid");

var promotions = new Map();

/*
 *@description addPromotions
 */
const savePromotion = ({ name, discount, description }) => {
  try {
    const promotion = {
      id: uuidv4(),
      name: name,
      discount: discount,
      description: description,
      createdOn: new Date(),
      updatedOn: new Date(),
    };

    promotions.set(promotion.id, promotion);
  } catch (error) {
    console.error(error);
  }
};

/*
 *@description viewPromotions
 */
const getAllPromostions = () => {
  return [...promotions.values()];
};

module.exports = {
  savePromotion,
  getAllPromostions,
};
