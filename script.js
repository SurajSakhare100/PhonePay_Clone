const sliderBtn = document.querySelectorAll(".slick_dots li button");
const sliderslideWidth = document.querySelector(".slide").offsetWidth;
const slides = document.querySelector(".slides");
const videoBox=document.querySelectorAll('.videoBox');
var counter = 0,
  curr = 0;
function slideImage() {
  slides.style.transition = "transform 1s linear";
  slides.style.transform = "translateX(" + -sliderslideWidth + "px)";

  // slider btn logic

  sliderBtn[counter].classList.remove("slick-active");
  if (counter == 4) {
    sliderBtn[counter].classList.remove("slick-active");
    counter = -1;
    sliderBtn[0].classList.add("slick-active");
  }
  sliderBtn[counter + 1].classList.add("slick-active");
  counter++;

  setTimeout(() => {
    slides.style.transition = "none";
    slides.appendChild(slides.firstElementChild);
    slides.style.transform = "translateX(0)";
  }, 1000);
}

videoBox.forEach(e => {
  e.addEventListener('mouseover',(el)=>{
    console.log(el);
    el.target.style.zIndex=15;
})
});

const id = setInterval(slideImage, 2000);
