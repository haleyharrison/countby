describe('countTo', function() {
  it("it returns the numbers between 0 and given number", function() {
      expect(countTo(7)).to.eql([1,2,3,4,5,6,7]);
  })
});
