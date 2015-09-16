
  describe('countBy', function(){
    it("returns the user inputted number counted by the multiples of the second user input", function() {
      expect(countBy(5, 20)).to.eql([5, 10, 15, 20]);
    })
  });
