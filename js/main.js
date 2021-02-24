var icon = document.getElementById("hamburger");
var n = 0;
function hamburger() {
  if (n == 0) {
    icon.style = "background-image:url(../images/icon-close.svg)";
    n = 1;
  } else {
    icon.style = "backgroundImage:url(../images/icon-hamburger.svg)";
    n = 0;
  }
}
