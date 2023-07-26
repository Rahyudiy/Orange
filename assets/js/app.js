document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".image");
  new Ukiyo(elements, {
    scale: 1.5,
    speed: 1.5,
    willChange: true,
    wrapperClass: "ukiyo-wrapper",
    externalRAF: false,
  });
});

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

const scroll = new LocomotiveScroll({
    smooth: 0.05,
});

// Get the current year
const currentYear = new Date().getFullYear();

// Display the current year in the 'year' paragraph
document.getElementById("year").textContent = `${currentYear}`;