// var myNav = document.getElementById("mynav");
// window.onscroll = function() {
//   "use strict";
//   if (document.body.scrollTop >= 200) {
//     myNav.classList.add("nav-colored");
//     myNav.classList.remove("nav-transparent");
//   } else {
//     myNav.classList.add("nav-transparent");
//     myNav.classList.remove("nav-colored");
//   }
// };
window.addEventListener("scroll", function(e) {
  var nav = document.getElementById("mynav");
  if (document.documentElement.scrollTop > 200) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
    document.getElementById("a-center").classList.add("ht");
    document.getElementById("img-center").classList.add("img-scroll-ht");
  } else {
    nav.classList.add("nav-transparent");
    document.getElementById("a-center").classList.remove("ht");
    document.getElementById("img-center").classList.remove("img-scroll-ht");
    nav.classList.remove("nav-colored");
  }
});

