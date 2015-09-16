  var countBy = function(multiplier, upperBound) {
      var integers = [];
        for (var i = 1; i <= upperBound; i++) {
            if(i % multiplier === 0) {
              integers.push(i);
            }
        }
        return integers;
  }


  $(document).ready(function() {
    $("form#count-by").submit(function(event) {
      var multiplier = parseInt($("input#multiplier").val());
      var upperBound = parseInt($("input#upperBound").val());
      var result = countBy(multiplier, upperBound);
      $(".output").text(result);

      $("#result").show();
        event.preventDefault();
      });
    });
