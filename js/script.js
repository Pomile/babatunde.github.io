
function openTab(evt, cityName) {
  var i, x;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  
  }
  document.getElementById(cityName).style.display = "block";
 }
