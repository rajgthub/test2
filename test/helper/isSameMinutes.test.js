const expect = require("expect");
const isSameMinutes = require("../../helper/isSameMinutes");
const getTime = require("../../helper/getTime");
describe("Check same minutes", () => {
  it("should retrun true for same minutes on the same date", () => {
    expect(isSameMinutes(getTime("2nd September 10:04"), getTime("2nd September 10:04"))).toBe(true);
  });
  it("should retrun false for different minutes on the same date", () => {
    expect(isSameMinutes(getTime("2nd September 10:03"), getTime("2nd September 10:04"))).toBe(false);
  });
});