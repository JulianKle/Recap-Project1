const bodyElement = document.querySelector('[data-js="main"]');
const switchDark = document.querySelector('[data-js="toggle-button"]');

switchDark.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

const bookmark = document.querySelector('[data-js="bookmark_click"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.add("dark");
});
