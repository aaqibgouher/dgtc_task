const mongoose = require("mongoose");
const { roles } = require("./constants");

const isRole = (role) => {
  return roles.hasOwnProperty(role);
};

const isEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const isMongoId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
  isRole,
  isEmail,
  isMongoId,
};
