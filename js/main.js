// side navigation menu for mobile
const navMobileOpenClose = document.getElementById("mobile-nav-button");
const navWrapper = document.getElementById("mobileWrapper");
const iconOpen = navMobileOpenClose.querySelector("mobile-button-image-open");
const iconClose = navMobileOpenClose.querySelector("mobile-button-image-close")


navMobileOpenClose.addEventListener("click", () => {
  // arrow function
  if (navWrapper.classList.contains("visible")) {
    navWrapper.classList.remove("visible");
  } else {
    navWrapper.classList.toggle("show");
  }
  navWrapper.classList.toggle("fixed");
  navMobileOpenClose.classList.toggle("close");
});
