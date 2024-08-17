const hamburger = document.querySelector(".header__hamburger");
const slideIn = document.querySelector(".header__list");

hamburger.addEventListener("click", () => {
  if (slideIn.style.left !== '0px'){
    slideIn.style.left = 0;
    console.log(slideIn.style.left)
  } else {
    console.log('fish')
    slideIn.style.left = '40rem';
  }
});
