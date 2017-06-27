document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};
function mouseOver() {
    document.getElementById("demo").style.color = "#8080F0";
  }
  function mouseOut() {
      document.getElementById("demo").style.color = "black";
  }
