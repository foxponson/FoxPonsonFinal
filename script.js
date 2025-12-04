// Basic greeting alert w star symbol~
alert("Welcome To Fox's Page✩");


// Overlay in & out opacity animation, starry background img, atop gradient
const overlay = document.querySelector('.bg-overlay-container');
overlay.animate(
  [
    { opacity: 0 },
    { opacity: .1 },
    { opacity: .1 },
    { opacity: 0 }
  ],
  {
    duration: 10000,
    iterations: Infinity,
    easing: "ease-in-out"
  }
);