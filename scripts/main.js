const bodyElement = document.querySelector('[data-js="main"]');
const switchDark = document.querySelector('[data-js="toggle-button"]');
const bookmark = document.querySelector('[data-js="bookmark-click"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerCard = document.querySelector('[data-js="answerCard"]');

bookmark.addEventListener("click", () => {
  if (bookmark.textContent === "🔖") {
    bookmark.textContent = "Marked✔";
  } else {
    bookmark.textContent = "🔖";
    console.log(bookmark.value);
  }
});

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    answerButton.textContent = "Hide answer";
    answerCard.hidden = false;
  } else {
    answerButton.textContent = "Show answer";
    answerCard.hidden = true;
  }
});
