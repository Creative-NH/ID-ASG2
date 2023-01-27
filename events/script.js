
var a = document.querySelector(".event1")
a.onclick = function() {togglepopup("popup1")}
var b = document.querySelector(".event2")
b.onclick = function() {togglepopup("popup2")}
document.getElementById("cross").onclick = function() {togglepopup("popup1")};
document.getElementById("cross2").onclick = function() {togglepopup("popup2")};
document.getElementById("overlay1").onclick = function() {togglepopup("popup1")};
document.getElementById("overlay2").onclick = function() {togglepopup("popup2")};
function togglepopup(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }