const expect = require("expect");
const isValidReview = require("../../helper/isValidReview");
describe("Valid review", () => {
  it("should retrun true for valid review", () => {
    expect(
      isValidReview({
        createdAt: "2nd September 10:04",
        solicited: true,
        device: "KB3‐IKU",
        wordLength: 50,
        stars: "****"
      })
    ).toBeTruthy();
  });
  it("should retrun false for invalid review", () => {
    expect(
      isValidReview({
        createdAt: "15th July 15:09",
        solicited: "monkey",
        device: null,
        wordLength: undefined,
        stars: null
      })
    ).toBeFalsy();
  });
});
