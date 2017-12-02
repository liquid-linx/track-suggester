$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var backFront = $("input:radio[name=1]:checked").val();
    var platform = $("input:radio[name=2]:checked").val();
    var ease = $("input:radio[name=3]:checked").val();
    var enviro = $("input:radio[name=4]:checked").val();
    var coin = $("input:radio[name=5]:checked").val();

    if (backFront === "back" && platform === "network" && ease === "no" && enviro === "large" && coin === "logic") {
              alert("Good Luck!");
              $(".csharp").show();


      }
      });
    });
