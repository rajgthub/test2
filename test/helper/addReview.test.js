const expect = require("expect");
const addReview = require("../../helper/addReview");
describe("Add review and return score", () => {
  const john = {
    name: "Jon",
    score: 100,
    reviews: []
  };
  //1
  it("should return Info: Jon has a trusted review score of 100", () => {
    //john receive a review one
    const result = addReview(john, {
      createdAt: "12th July 12:04",
      solicited: true,
      device: "LB3‐TYU",
      wordLength: 50,
      stars: "*****"
    });
    expect(result).toBe("Info: Jon has a trusted review score of 100");
  });
  //2
  it("should retrun Info: Jon has a trusted review score of 80", () => {
    const result = addReview(john, {
      createdAt: "12th July 12:05",
      solicited: false,
      device: "KB3‐IKU",
      wordLength: 20,
      stars: "**"
    });
    expect(result).toBe("Info: Jon has a trusted review score of 80");
  });
  //3
  it("should retrun Info: Jon has a trusted review score of 71.5", () => {
    const result = addReview(john, {
      createdAt: "13th July 15:04",
      solicited: false,
      device: "CY8‐IPK",
      wordLength: 150,
      stars: "***"
    });
    expect(result).toBe("Info: Jon has a trusted review score of 71.5");
  });
  //4
  it("should retrun Info: Jon has a trusted review score of 74.5", () => {
    const result = addReview(john, {
      createdAt: "15th July 10:04",
      solicited: true,
      device: "BB4‐IPK",
      wordLength: 40,
      stars: "*****"
    });
    expect(result).toBe("Info: Jon has a trusted review score of 74.5");
  });
  //5
  it("should retrun Info: Jon has a trusted review score of 77.5", () => {
    const result = addReview(john, {
      createdAt: "29th August 10:04",
      solicited: true,
      device: "LX2‐IPK",
      wordLength: 70,
      stars: "****"
    });
    expect(result).toBe("Info: Jon has a trusted review score of 77.5");
  });
  //6
  it("should retrun Could not read review summary data", () => {
    const result = addReview(john, {
      createdAt: "15th July 15:09",
      solicited: "monkey",
      device: null,
      wordLength: undefined,
      stars: null
    });
    expect(result).toBe("Could not read review summary data");
  });
  //7
  it("should retrun Warning: Jon has a trusted review score of 50.5", () => {
    const result = addReview(john, {
      createdAt: "2nd September 10:04",
      solicited: true,
      device: "KB3‐IKU",
      wordLength: 50,
      stars: "****"
    });
    expect(result).toBe("Warning: Jon has a trusted review score of 50.5");
  });
  //8
  it("should retrun Alert: Jon has been de‐activated due to a low trusted review score", () => {
    const result = addReview(john, {
      createdAt: "2nd September 10:04",
      solicited: true,
      device: "AN9‐IPK",
      wordLength: 90,
      stars: "**"
    });
    expect(result).toBe(
      "Alert: Jon has been de‐activated due to a low trusted review score"
    );
  });
});
