window.onscroll = function () {
  var scroll = window.scrollY;
  if (scroll < 245) {
    if (document.querySelector("#sticky-header")) {
      document.querySelector("#sticky-header").classList.remove("sticky-menu");
    }
  } else {
    if (document.querySelector("#sticky-header")) {
      document.querySelector("#sticky-header").classList.add("sticky-menu");
    }
  }
};
