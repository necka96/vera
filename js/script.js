// replace text in header
const checkReplace = document.querySelector(".replace-me");

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: "animated fadeIn",
    speed: 2000,
    separator: ",",
    loopCount: "infinite",
    autoRun: true,
  });
}
// User scroll for navbar
function useScroll() {
  const navbarScroll = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbarScroll.classList.add("bg-dark");
      navbarScroll.classList.add("border-bottom");
      navbarScroll.classList.add("border-scoundary");
      navbarScroll.classList.add("navbar-sticky");
    } else {
      navbarScroll.classList.remove("bg-dark");
      navbarScroll.classList.remove("border-bottom");
      navbarScroll.classList.remove("border-scoundary");
      navbarScroll.classList.remove("navbar-sticky");
    }
  });
}

document.addEventListener("DOMContentLoaded", useScroll);

// Video Modal

const videoBtn = document.querySelector(".video-btn");
const videoModal = document.querySelector("#videoModal");
const video = document.querySelector("#video");
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener("click", () => {
    videoSrc = videoBtn.getAttribute("data-bs-src");
  });
}

if (videoModal !== null) {
  videoModal.addEventListener("shown.bs.modal", () => {
    video.setAttribute(
      "src",
      videoSrc + "?autoplay=1;modestbranding=1;showInfo=0"
    );
  });
  videoModal.addEventListener("hidden.bs.modal", () => {
    video.setAttribute("src", videoSrc);
  });
}
