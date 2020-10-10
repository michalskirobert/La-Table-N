
var i = 0;

var next = document.querySelectorAll(".scroll__item");
var back = document.querySelectorAll(".scrollBack__item");
var gallery = document.querySelectorAll(".gallery.scroll");
var scrollWidth = document.querySelector("img").offsetWidth;
var nextScroll;

document.querySelectorAll(".gallery.scroll"),
  document.querySelectorAll(".scroll__item").forEach(function (a, b) {
    a.addEventListener("click", () => {
      gallery[b].scrollLeft += scrollWidth;
    });
  });

document.querySelectorAll(".gallery.scroll"),
  document.querySelectorAll(".scrollBack__item").forEach(function (c, b) {
    c.addEventListener("click", function(){
      gallery[b].scrollLeft -= scrollWidth;
    });
  });