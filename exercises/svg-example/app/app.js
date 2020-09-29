let yellowCir = document.getElementById("st0");
console.log(yellowCir);

function updateRadius() {
  var newCr = Number(yellowCir.getAttribute("r"));
  newRadius = 20;
  yellowCir.setAttribute("r", newRadius);
  console.log(newRadius);
}

updateRadius();
