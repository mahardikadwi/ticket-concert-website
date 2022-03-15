// side navigation menu for mobile
const navMobileOpenClose = document.getElementById("mobile-nav-button");
const navWrapper = document.getElementById("mobileWrapper");

navMobileOpenClose.addEventListener("click", () => {
  // arrow function
  if (navWrapper.classList.contains("invisible")) {
    navWrapper.classList.remove("invisible");
    document.body.classList.remove('lock-scroll');
  } else {
    document.body.classList.toggle('lock-scroll');
    navWrapper.classList.toggle("show");
  };
  navWrapper.classList.toggle("fixed");
});
