// testing file
// console.log("hello world");
// ********* set date ************
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// ********* nav toggle ************
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// ********* nav fixed ************
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 134.35) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
