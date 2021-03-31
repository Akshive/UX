var toggleButton = document.getElementsByClassName("toggle-button")[0];
var navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
