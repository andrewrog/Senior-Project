function activateMenu() {
  const rightSide = document.querySelector(".right-side");
  const hamburger = document.querySelector(".hamburger-button");

  rightSide.classList.toggle("show");
  hamburger.classList.toggle("active");
}