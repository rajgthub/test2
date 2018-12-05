const isValidReview = require("./isValidReview");
const calculateScore = require("./calculateScore");
module.exports = (professional, review) => {
  let msg
  if (isValidReview(review)) {
    professional.reviews.push(review);
    msg = calculateScore(professional)
    if (!msg) {
      return (
      `Info: ${professional.name} has a trusted review score of ${
        professional.score
      }`)
    }
  } else {
    return ("Could not read review summary data");
  }
  return msg
};
