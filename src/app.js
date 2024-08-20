import "bootstrap";
import "./style.css";

window.randomCard = function randomCard() {
  let suits = ["♥", "♠", "♣", "♦"];
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suitRandom = suits[Math.floor(Math.random() * suits.length)];
  let cardNumberRandom =
    cardNumber[Math.floor(Math.random() * cardNumber.length)];

  document.getElementById("suit-top").innerHTML = `${
    suitRandom == "♦" || suitRandom == "♥"
      ? `<p class= "text-danger">${suitRandom}</p>`
      : `<p>${suitRandom}</p>`
  }`;

  document.getElementById(
    "card-number"
  ).innerHTML = `<p>${cardNumberRandom}</p>`;

  document.getElementById("suit-bottom").innerHTML = `${
    suitRandom == "♦" || suitRandom == "♥"
      ? `<p class= "text-danger mb-1">${suitRandom}</p>`
      : `<p class= "mb-1">${suitRandom}</p>`
  }`;
};
