const UserModel = require('../data/models/User');

const validateParams = ({ id, firstName, lastName, age, gender, maritalStatus, kids }) => {
  let isValid = true;
  if (!(/^[0-9]*$/.test(id))) isValid = false;
  if (!(/^[A-Za-z]+$/.test(firstName)) || !(/^[A-Za-z]+$/.test(lastName))) isValid = false;
  if (age < 0 || age > 120) isValid = false;
  if (gender !== 'Male' && gender !== 'Female') isValid = false;
  if (maritalStatus !== 'Single' && maritalStatus !== 'Married' && maritalStatus !== 'Divorced' && maritalStatus !== 'Widower') isValid = false;
  invalidKid = kids.some((kid) => {
    return kid !== '' && !(/^[A-Za-z]+$/.test(kid));
  });
  if (invalidKid) isValid = false;
  return isValid;
}

const getAllUsers = () => {
  return UserModel.find();
}

const createUser = ({ id, firstName, lastName, age, gender, maritalStatus, kids }) => {
  if (!(validateParams({ id, firstName, lastName, age, gender, maritalStatus, kids }))) {
    throw new Error('invalid params');
  }
  return UserModel({ id, firstName, lastName, age, gender, maritalStatus, kids }).save();
}

const updateUser = ({ _id, id, firstName, lastName, age, gender, maritalStatus, kids }) => {
  if (!(validateParams({ id, firstName, lastName, age, gender, maritalStatus, kids }))) {
    throw new Error('invalid params');
  }
  return UserModel.findOneAndUpdate({ _id }, { id, firstName, lastName, age, gender, maritalStatus, kids });
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser
}
