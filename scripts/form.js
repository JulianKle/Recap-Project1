const submitButton = document.querySelector('[data-js="submitButton"]');
const form = document.querySelector('[data-js="formNewCards"]');
const counterField = document.querySelector('[data-js="characterCounter"]');
const counterField1 = document.querySelector('[data-js="characterCounter1"]');
const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const yourAnswer = document.querySelector('[data-js="yourAnswer"]');
const maxLength = yourQuestion.getAttribute("maxlength");

// Umwandeln der Eingabedaten in Objekt + Generieren und Hinzufügen der Karte

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const newCard = document.createElement("article");
  newCard.classList.add("card");
  newCard.innerHTML = ` <article class="bookmark1" data-js="bookmark1">
  <p class="bookmark-click" data-js="bookmark-click">🔖</p>
</article>

<h3>${data.yourQuestion}</h3>
<button type="button" class="answerButton" data-js="answer-button">
  Show answer
</button>

<p hidden="true" class="answer" data-js="answerCard">${data.yourAnswer}</p>

<article class="flexTag">
  <p class="tag">${data.tagInput}</p>
</article>`;
  document.body.append(newCard);
});

//Funktion calculator

function calculate(length) {
  const count = maxLength - length;
  return count;
}

//Eventlistener zum Abrufen der Funktion + Veränderungen des Display Textes bei Eingabe von Input für Question- und Answer-Box

yourAnswer.addEventListener("input", () => {
  const counter = calculate(yourAnswer.value.length);
  counterField1.textContent = `${counter} characters left`;
});

yourQuestion.addEventListener("input", () => {
  const counter = calculate(yourQuestion.value.length);
  counterField.textContent = `${counter} characters left`;
});
