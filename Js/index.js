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
  if (window.scrollY > 450) {
    navSwipe.style = "background-color:#fff;"+"border-bottom: 1px solid #000;";

    for (var i = 0; i < textSwipe.length; i++) {
      textSwipe[i].style.color = "black";
    }
  }

  else if (this.window.scrollY < 450) {
    navSwipe.style ="background-color:transparent;"

    for (var i = 0 ; i < textSwipe.length ; i++) {
        textSwipe[i].style.color = "black"
    }
  }
});

// ====================END NAV================== // 

var sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function init() {
    reset();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

init();