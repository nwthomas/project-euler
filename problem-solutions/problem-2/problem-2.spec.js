const sumEvenFib = require("./problem-2");

describe("sums up even Fibonacci numbers", function() {
  it("works with 1", function() {
    expect(sumEvenFib(1)).toEqual(0);
  });
  it("works with larger numbers", function() {
    expect(sumEvenFib(1000)).toEqual(798);
  });
  it("returns string for negative number", function() {
    expect(sumEvenFib(-57)).toEqual(0);
  });
  it("gives the answer for 4 million", function() {
    expect(sumEvenFib(4000000)).toEqual(4613732);
  });
});
