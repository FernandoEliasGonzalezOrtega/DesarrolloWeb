try {
  const cent = 1;
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}




function block() {
  var z = document.createElement("img");

  var x = document.getElementById("B1");
  var y = document.getElementById("B2");
 
    x.style.display = "none";
    y.style.display = "block";
  
}
function block2() {
  var x = document.getElementById("B1");
  var y = document.getElementById("B2");
 
    y.style.display = "none";
    x.style.display = "block";
}