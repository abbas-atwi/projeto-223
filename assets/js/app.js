// sliders
const arrowClick = document.querySelectorAll(".arrow");
const sliders = document.querySelector(".sliders");
const moveSliders = ["100", "200", "300"];
const slide = document.querySelectorAll(".slide");
let count = 0;
function moveSlide(ids) {}
arrowClick.forEach((item, id) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const slide = item.id === "right" ? "-" : " ";
    sliders.style.marginLeft = `${slide}${moveSliders[count++]}vw`;
    count = 0;
  });
});

// scroll active motion

const boxHome = document.querySelectorAll(".home-info");
const jsScroll = document.querySelectorAll(".js-scroll");
function HomeBoxes() {
  boxHome.forEach((item) => {
    item.children[0].classList.remove("active");
    item.classList.remove("active");
  });
}
HomeBoxes();
const intervals = [1000, 1300, 1400];
const heightWindow = window.innerHeight * 0.6;
window.addEventListener("scroll", () => {
  jsScroll.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top < 0;
    if (boxTop) {
      for (let i = 0; i < boxHome.length; i++) {
        setInterval(() => {
          boxHome[i].classList.add("active");
        }, intervals[i]);
        boxHome[i].children[0].classList.add("active");
      }
    }
    console.log();
  });
});
