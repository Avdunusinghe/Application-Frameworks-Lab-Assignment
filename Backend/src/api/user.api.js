/*
 *SE3040 – Application Frameworks
 *Lab Assignment
 *Author => Dunusinghe.A.V IT20025526
 *Sri Lanka Institute Of Information Technology
 *Department Of Computer Science And Software Sngineering
 */
const { v4: uuidv4 } = require("uuid");

var users = new Map();

/*
 *@description CreateProfile
 */

const saveUser = ({ name, email, mobileNumber, password, role }) => {
  const user = {
    id: uuidv4(),
    name: name,
    email: email,
    mobileNumber: mobileNumber,
    password: password,
    role: (role = 1 ? UserRole.CUSTOMER : UserRole.TRADER),
    createdOn: new Date(),
    updatedOn: new Date(),
  };

  users.set(user.id, user);
};

/*
 *@description viewCustomer
 */
const getClientsDetails = () => {
  let customers = new Map();

  for (const user of users.values()) {
    if (user.role == UserRole.CUSTOMER) {
      (user.password = null), customers.set(user.id, user);
    }
  }

  return [...customers.values()];
};

//enum
const UserRole = {
  CUSTOMER: 1,
  TRADER: 2,
};
Object.freeze(UserRole);

module.exports = {
  saveUser,
  getClientsDetails,
};
