let menu = document.querySelector(".menu"),
  links = document.querySelector(".links");

console.log(links);

menu.addEventListener("click", () => {
  links.classList.toggle("show");
});

window.addEventListener("scroll", function () {
  if (scrollY > 500) {
    document.querySelector(".backtotop").style.display = "flex";
    document.querySelector(".backtotop").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    document.querySelector(".backtotop").style.display = "none";
  }
});


// var sticky = document.querySelector(".landing").offsetTop;
// console.log(sticky);

// // Add the fixed class to the header when you reach its scroll position. Remove "fixed" when you leave the scroll position
// function checkScroll() {
//   if (window.scrollY > sticky) {
//     document.querySelector(".header").classList.add("fixed");
//   } else {
//     document.querySelector(".header").classList.remove("fixed");
//   }
// }
