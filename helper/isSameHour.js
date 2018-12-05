module.exports = (momentOne, momentTwo) => {
  if (momentOne.day === momentTwo.day && momentOne.month === momentTwo.month) {
    return momentOne.time.split(":")[0] === momentTwo.time.split(":")[0];
  }
  return false;
};
