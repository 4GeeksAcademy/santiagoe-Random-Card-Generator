import "bootstrap";
import "./style.css";

window.onload = function() {
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

  document.querySelector("body").innerHTML = `
    <div class="d-flex justify-content-center mt-5">
      <div class="bg-light card-container  text-center rounded">
        <div class="text-start ps-3">
          ${
            suitRandom == "♦" || suitRandom == "♥"
              ? `<p class= "text-danger">${suitRandom}</p>`
              : `<p>${suitRandom}</p>`
          }
        </div>
        <p>${cardNumberRandom}</p>
        <div class="text-end pe-3">
          ${
            suitRandom == "♦" || suitRandom == "♥"
              ? `<p class= "text-danger mb-1">${suitRandom}</p>`
              : `<p>${suitRandom}</p>`
          }
        </div>
      </div>
    </div>`;
};
