const isSameHour = require("./isSameHour");
module.exports = (momentOne, momentTwo) => {
  if (isSameHour(momentOne, momentTwo)) {
    return momentOne.time.split(":")[1] === momentTwo.time.split(":")[1];
  }
  return false;
};
