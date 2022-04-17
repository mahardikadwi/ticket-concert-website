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

// desktop navigation
const navLink = document.querySelectorAll('.nav-links');
const navDropdown = document.getElementById('dropdownNav');
const dropDownImages = document.querySelectorAll('.nav-dropdown-images');
const dropdownSubList = document.querySelectorAll('.nav-subList');
const transparentBg = document.getElementsByClassName('layout');
const navUnderline = document.querySelectorAll('.backstroke');

    navLink[0].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      transparentBg[0].classList.add('is-active');
      dropDownImages[0].style.opacity = '1';
      dropdownSubList[0].style.display = 'block';
      dropdownSubList[1].style.display = 'none';
      dropDownImages[1].style.opacity = '0';
      dropdownSubList[2].style.display = 'none';
      dropDownImages[2].style.opacity = '0';
      dropdownSubList[3].style.display = 'none';
      dropDownImages[3].style.opacity = '0';
    });
    navLink[1].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      transparentBg[0].classList.add('is-active');
      dropDownImages[0].style.opacity = '0';
      dropdownSubList[0].style.display = 'none';
      dropdownSubList[1].style.display = 'block';
      dropDownImages[1].style.opacity = '1';
      dropdownSubList[2].style.display = 'none';
      dropDownImages[2].style.opacity = '0';
      dropdownSubList[3].style.display = 'none';
      dropDownImages[3].style.opacity = '0';
    });
    navLink[2].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      transparentBg[0].classList.add('is-active');
      dropDownImages[0].style.opacity = '0';
      dropdownSubList[0].style.display = 'none';
      dropdownSubList[1].style.display = 'none';
      dropDownImages[1].style.opacity = '0';
      dropdownSubList[2].style.display = 'block';
      dropDownImages[2].style.opacity = '1';
      dropdownSubList[3].style.display = 'none';
      dropDownImages[3].style.opacity = '0';
    });
    navLink[3].addEventListener('mouseover', () => {
      navDropdown.classList.add('is-active');
      transparentBg[0].classList.add('is-active');
      dropDownImages[0].style.opacity = '0';
      dropdownSubList[0].style.display = 'none';
      dropdownSubList[1].style.display = 'none';
      dropDownImages[1].style.opacity = '0';
      dropdownSubList[2].style.display = 'none';
      dropDownImages[2].style.opacity = '0';
      dropdownSubList[3].style.display = 'block';
      dropDownImages[3].style.opacity = '1';
    });
    navDropdown.addEventListener('mouseleave', () =>{
      navDropdown.classList.remove('is-active');
      transparentBg[0].classList.remove('is-active');
    });
    
