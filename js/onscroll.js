window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add("shadow");
    navbar.classList.add("bg-light");
    navbar.classList.remove("mt-3");
  } else {
    navbar.classList.remove("shadow");
    navbar.classList.remove("bg-light");
    navbar.classList.add("mt-3");
  }
}
