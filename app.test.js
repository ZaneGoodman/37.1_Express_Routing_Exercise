const { findMedian, findMean, findMode } = require("./helpers");

describe("Test Mean, Median, Mode Funcs", function () {
  let array = [];
  beforeEach(() => {
    array = [25, 36, 84, 96, 46, 20, 48, 36, 55, 44, 84, 36];
  });

  test("Test correct output from Mean", () => {
    let mean = findMean(array);
    expect.closeTo(50.8, mean);
  });
  test("Test correct output from Median", () => {
    let median = findMedian(array);
    expect.closeTo(45, median);
  });
  test("Test correct output from Mode", () => {
    let mode = findMode(array);
    expect(mode).toEqual(36);
  });
});
