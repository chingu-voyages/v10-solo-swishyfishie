import(
  "https://cferdinandi.github.io/smooth-scroll/dist/smooth-scroll.js"
).then(function() {
  new SmoothScroll('a[href*="#"]'); // eslint-disable-line
  console.log("resolved!");
});

const heroCont = document.querySelector(".hero-content");
const modal = document.querySelector("#myModal");
const modalBtn = document.querySelector("#modalBtn");
const closeModal = document.querySelector(".close-btn");

// HERO ONLOAD

window.onload = () => {
  setTimeout(() => {
    heroCont.classList.add("hero-cont-block");
  }, 1000);
};

// Modal

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
