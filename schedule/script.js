if (sessionStorage["loggedin"]!="t"){
    window.location.href = "../index.html";
}
var a = document.querySelector(".classtimetable")
a.onclick = function() {togglepopup("popup1")}
var b = document.querySelector(".cttimetable")
b.onclick = function() {togglepopup("popup2")}
var c = document.querySelector(".examtimetable")
b.onclick = function() {togglepopup("popup3")}
document.getElementById("cross").onclick = function() {togglepopup("popup1")};
document.getElementById("cross2").onclick = function() {togglepopup("popup2")};
document.getElementById("cross3").onclick = function() {togglepopup("popup3")};
document.getElementById("overlay1").onclick = function() {togglepopup("popup1")};
document.getElementById("overlay2").onclick = function() {togglepopup("popup2")};
document.getElementById("overlay3").onclick = function() {togglepopup("popup3")};
function togglepopup(id) {
    var x = document.getElementById(id);
    if (x.style.display == "none") {
      $(".main-container").css("filter","blur(2px)");
      $("footer").css("filter","blur(2px)")
      x.style.display = "block";
    } else {
      $(".main-container").css("filter","none")
      $("footer").css("filter","none")
      x.style.display = "none";
    }
  }