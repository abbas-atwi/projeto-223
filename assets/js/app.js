// sliders
const arrowClick = document.querySelectorAll(".arrow");
const sliders = document.querySelector(".sliders");
const slide = document.querySelectorAll(".slide");
const positionSliders = ["0vw", "-100vw", "-200vw"];
const imgs = [
  "assets/img/front-end-1.jpeg",
  "assets/img/front-end-2.webp",
  "assets/img/front-end-1.jpeg",
];
let count = 0;

slide.forEach((item, id) => {
  item.style.backgroundImage = `url(${imgs[id]})`;
  scrollSuave();
});

arrowClick.forEach((item, id) => {
  item.addEventListener("click", () => {
    if (item.getAttribute("id") == "right") {
      sliders.style.marginLeft = positionSliders[++count];
    } else if (item.getAttribute("id") == "left") {
      sliders.style.marginLeft = positionSliders[--count];
    }
  });
  console.log(positionSliders[count++]);
  console.log(positionSliders[--count]);
});

const boxHome = document.querySelectorAll(".home-info");
const jsScroll = document.querySelectorAll(".js-scroll");
function HomeBoxes() {
  boxHome.forEach((item) => {
    item.children[0].classList.remove("active");
    item.classList.remove("active");
  });
}
HomeBoxes();
const intervals = [1100, 1200, 1300, 1400];
const heightWindow = window.innerHeight * 0.6;
function scrollSuave() {
  window.addEventListener("scroll", () => {
    jsScroll.forEach((item) => {
      const boxTop = item.getBoundingClientRect().top - heightWindow;
      if (boxTop < 0) {
        for (let i = 0; i < boxHome.length; i++) {
          setInterval(() => {
            boxHome[i].classList.add("active");
            boxHome[i].children[0].classList.add("active");
          }, intervals[i]);
        }
      }
      console.log();
    });
  });
}
scrollSuave();
const links = document.querySelectorAll(".menu a[href^='#']");
console.log(links);
function scrollsActives(i) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const sections = document.querySelector(href);
      const sectionTop = sections.getBoundingClientRect().top < 0;
      if (sectionTop <= 0) {
        for (let i = 0; i < boxHome.length; i++) {
          setInterval(() => {
            boxHome[i].classList.add("active");
          }, intervals[i]);
          boxHome[i].children[0].classList.add("active");
        }
      }
      sections.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}
boxHome[0].classList.add("active");
boxHome[0].children[0].classList.add("active");
scrollsActives();

// active menu show mobile
const menuClickBuguer = document.querySelector(".menuburguer");
const menuNav = document.querySelector(".menu nav");
menuClickBuguer.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

const contato = document.querySelectorAll(".contact-info dt");
contato.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.toggle("active");
    item.classList.toggle("active");
  });
});
