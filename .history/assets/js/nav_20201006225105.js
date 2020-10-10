//scrolling api
$(document.body).on("touchmove", onScroll); // for mobile
$(window).on("scroll", onScroll);

//headerSize

var $contactLink = document.querySelector(".contact");
var $headerSize = document.querySelector("header").offsetHeight;

// callback
function onScroll() {
  var $nav = document.querySelector("nav");
  if ($(window).scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $nav.classList.add("open");
    $contactLink.classList.add("active");
  } else {
    $nav.classList.remove("open");
    $contactLink.classList.remove("active");
  }
}
//change arrow direction
window.onscroll = function () {
  var arrow = document.querySelector(".arrow__item.up");
  var arrowBox = document.querySelector(".arrow__up");

  if (window.innerHeight + 140 + window.scrollY >= document.body.offsetHeight) {
    document.querySelector(".arrow__item").style.display = "none";
    document.querySelector(".arrow__item").style.display = "none";
    arrow.style.display = "block";
    arrowBox.style.display = "block";
  } else {
    document.querySelector(".arrow__item").style.display = "block";
    document.querySelector(".arrow__item").style.display = "block";
    arrow.style.display = "none";
    arrowBox.style.display = "none";
  }
};

document.querySelector(".arrow__up").setAttribute("href", "#landing");

//arrow functions
function getCurrentSection() {
  var cutoff = $(window).scrollTop();
  var curIndex = 0;
  for (var index = 0; index < $("section").length; index++) {
    if ($("section").eq(index).offset().top >= cutoff) {
      curIndex = index;
      break;
    }
  }
  return curIndex;
}

$(".arrow__box").click(function (e) {
  e.preventDefault();
  var curIndex = getCurrentSection();
  if (curIndex === $("section").length) {
    return;
  }
  var cutoff = $(window).scrollTop();
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: ($("section")
          .eq(curIndex + 1)
          .offset().top -= $headerSize),
      },
      1200
    );
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: ($($.attr(this, "href")).offset().top -= $headerSize),
    },
    1200
  );
  if ((navLinks.classList === "nav-links", "open")) {
    navLinks.classList.remove("open");
    logo.classList.remove("open");
    arrow.style.display = "flex";
  } else {
  }
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

//menu function

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const arrow = document.querySelector(".arrow__box");
const logo = document.querySelector("#logo > img");

hamburger.addEventListener("click", () => {
  if (navLinks.classList.toggle("open")) {
    arrow.style.display = "none";
    logo.classList.add("open");
  } else {
    arrow.style.display = "flex";
    logo.classList.remove("open");
  }
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

