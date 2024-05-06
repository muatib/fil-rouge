const correctAnswer = "guillaume";
const submitButton = document.querySelector("#submitButton");
const closeCorrectPopupButton = document.querySelector("#closeCorrectPopup");
const closeIncorrectPopupButton = document.querySelector(
  "#closeIncorrectPopup"
);
const changeTextState = document.querySelector("#txt__wrong");

/**
 *
 */
function getAnswer() {
  const userAnswer = document.querySelector("#answer").value.toLowerCase();
  const answerInput = document.querySelector("#answer");
  if (userAnswer === correctAnswer) {
    showPopup("correctPopup");
  } else {
    answerInput.value = "";
    answerInput.classList.add("game__form-wrong", "shake");
    changeTextState.classList.add("wrong__txt--disp");
    changeTextState.classList.remove("wrong__txt");
  }
}

/**
 * show popup on click
 * @param {element} show the popup
 */
function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}
/**
 * close popup on click
 * @param {element} close the popup
 */
function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}
/**
 * adding a class to a popup when get correct answer
 * @param {element} popupId adding the class
 */
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.add("show");
  }
}

submitButton.addEventListener("click", getAnswer);
closeCorrectPopupButton.addEventListener("click", function () {
  closePopup("correctPopup");
});

// if (closeCorrectPopupButton) {
//   closeCorrectPopupButton.addEventListener("click", function () {
//     closePopup("correctPopup");
//   });
// }

// if (closeIncorrectPopupButton) {
//   closeIncorrectPopupButton.addEventListener("click", function () {
//     closePopup("incorrectPopup");
//   });
// }
// closeIncorrectPopupButton.addEventListener("click", function () {
//   closePopup("incorrectPopup");
// });
