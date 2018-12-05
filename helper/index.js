const isSameHour = require("./isSameHour");
const isSameMinutes = require("./isSameMinutes");
const getTime = require("./getTime");
const isSameDevice = require("./isSameDevice");
const calAverage = require("./calAverage");
exports.warnOrDeactivate = professional => {
  const { score } = professional;
  if (score < 70 && score > 50) {
    return `Warning: ${professional.name} has a trusted review score of ${
      professional.score
    }`;
  }

  if (score <= 50) {
    return `Alert: ${
      professional.name
    } has been de‐activated due to a low trusted review score`;
  }
};
exports.reduceScore = professional => {
  const { reviews } = professional;
  const lengthReviews = reviews.length;
  const { wordLength, stars, solicited } = reviews[lengthReviews - 1];

  //Lots to say:
  if (wordLength > 100) {
    professional.score = professional.score - 0.5;
  }

  //Burst:
  if (lengthReviews > 1) { // do only if more than one reviews exsit
    if (
      isSameMinutes(
        getTime(reviews[lengthReviews - 1].createdAt),
        getTime(reviews[lengthReviews - 2].createdAt)
      )
    ) {// looking for same minutes and only compare current review with the previous review
      professional.score = professional.score - 40;
    } else if (
      isSameHour(
        getTime(reviews[lengthReviews - 1].createdAt),
        getTime(reviews[lengthReviews - 2].createdAt)
      )
    ) {// looking for same hour on the same date
      professional.score = professional.score - 20;
    }
  }
  if (isSameDevice(reviews)) { // looking for same device
    professional.score = professional.score - 30;
  }

  //All-Star:
  const avg = calAverage(reviews);
  if (!solicited && stars.split("").length == 5) {// if not genuien based on solicited property with 5 stars
    professional.score = professional.score - 2;
  } else if (!solicited && avg < 3.5) {//not genuien based on solicited property with average fo lesser than 3.5 stars
    professional.score = professional.score - 2 * 4;
  }
};

exports.increaseScore = professional => {
  const { score, reviews } = professional;

  if (reviews[reviews.length - 1].solicited && score <= 97) {
    //avoid going above 100%
    professional.score = professional.score + 3;
  }
};
