var dropDown = document.getElementById("dropdown");
var navSwipe = document.querySelector(".navSwipe");
var textSwipe = document.querySelectorAll(".textSwipe");

function showSideBar() {
  dropDown.classList.toggle("nav-show");
}
function hideSideBar() {
  dropDown.classList.remove("nav-show");
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    navSwipe.style =
      "background-color:#fff;" + "border-bottom: 1px solid #000;";

    for (var i = 0; i < textSwipe.length; i++) {
      textSwipe[i].style.color = "black";
    }
  } else if (this.window.scrollY < 150) {
    navSwipe.style = "background-color:transparent;";

    for (var i = 0; i < textSwipe.length; i++) {
      textSwipe[i].style.color = "black";
    }
  }
});

// ====================END NAV================== //