const multiples = require("./problem-1");

describe("multiples", function() {
  it("works with small numbers", function() {
    expect(multiples(10)).toEqual(33);
  });
  it("works with large numbers", function() {
    expect(multiples(400)).toEqual(37668);
  });
  it("rejects numbers smaller than 0", function() {
    expect(multiples(-1)).toEqual("That number doesn't work.");
  });
  it("gives the answer for 100", function() {
    expect(multiples(100)).toEqual(2418);
  });
});
