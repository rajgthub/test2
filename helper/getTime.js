module.exports = createdAt => {
  let arr = createdAt && createdAt.split(" ");
  if (arr.length > 0) {
    return {
      day: arr[0],
      month: arr[1],
      time: arr[2]
    };
  }
};
