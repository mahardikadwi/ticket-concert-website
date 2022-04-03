// side navigation menu for mobile
const navMobileOpenClose = document.getElementById("mobile-nav-button");
const mobileNavWrapper = document.getElementById("mobileWrapper");

navMobileOpenClose.addEventListener("click", () => {
  // arrow function
  if (mobileNavWrapper.classList.contains("invisible")) {
    mobileNavWrapper.classList.remove("invisible");
    document.body.classList.remove("lock-scroll");
  } else {
    document.body.classList.toggle("lock-scroll");
    mobileNavWrapper.classList.toggle("show");
  }
  mobileNavWrapper.classList.toggle("fixed");
});

// desktop navigation (pake for loop ternyata gengsssss)
const navLink = document.querySelectorAll('.nav-links');
const navDropdown = document.getElementById('dropdownNav');
const dropDownImages = document.querySelectorAll('.nav-dropdown-images');
const dropdownSubList = document.querySelectorAll('.nav-subList');
let dropDownImagesArr = Array.from(dropDownImages);
let dropdownListArr = Array.from(dropdownSubList);


  for (let i = 0; i < navLink.length; i++) {
    navLink[0].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      dropDownImagesArr[0].classList.add('is-active');
      dropdownListArr[0].classList.add('is-active');
    });
    navLink[0].addEventListener('mouseout', () => {
      navDropdown.classList.remove('is-active');
      dropDownImagesArr[0].classList.remove('is-active');
      dropdownListArr[0].classList.remove('is-active');
    });
    navLink[1].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      dropDownImagesArr[1].classList.add('is-active');
      dropdownListArr[1].classList.add('is-active');
    });
    navLink[1].addEventListener('mouseout', () => {
      navDropdown.classList.remove('is-active');
      dropDownImagesArr[1].classList.remove('is-active');
      dropdownListArr[1].classList.remove('is-active');
    });
    navLink[2].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      dropDownImagesArr[2].classList.add('is-active');
      dropdownListArr[2].classList.add('is-active');
    });
    navLink[2].addEventListener('mouseout', () => {
      navDropdown.classList.remove('is-active');
      dropDownImagesArr[2].classList.remove('is-active');
      dropdownListArr[2].classList.remove('is-active');
    });
    navLink[3].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      dropDownImagesArr[3].classList.add('is-active');
      dropdownListArr[3].classList.add('is-active');
    });
    navLink[3].addEventListener('mouseout', () => {
      navDropdown.classList.remove('is-active');
      dropDownImagesArr[3].classList.remove('is-active');
      dropdownListArr[3].classList.remove('is-active');
    });
  };