const bodyElement = document.querySelector('[data-js="main"]');
const switchDark = document.querySelector('[data-js="toggle-button"]');
const bookmark = document.querySelector('[data-js="bookmark-click"]');

switchDark.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

bookmark.addEventListener("click", () => {
  bodyElement.classList.toggle("red");
});
