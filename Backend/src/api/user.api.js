const { v4: uuidv4 } = require("uuid");

var users = new Map();

/*
 *@description CreateProfile
 */

const saveUser = async ({ name, email, mobileNumber, password }) => {
  const user = {
    id: uuidv4(),
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    password: password,
    role: UserRole.CUSTOMER,
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.set(user.id, user);
};

//enum
const UserRole = {
  TRADER: 1,
  CUSTOMER: 2,
};
Object.freeze(UserRole);

module.exports = {
  saveUser,
};
