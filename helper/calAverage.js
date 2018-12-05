module.exports = reviews => {
  const len = reviews.length;
  let sum = 0;
  if (len > 1) {
    reviews.forEach(review => {
        sum = sum + review.stars.split('').length 
    });
  }
  return sum / len;
};
