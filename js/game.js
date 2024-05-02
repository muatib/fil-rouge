const correctAnswer = "guillaume";
const submitButton = document.querySelector("#submitButton");
const closeCorrectPopupButton = document.querySelector("#closeCorrectPopup");
const closeIncorrectPopupButton = document.querySelector(
  "#closeIncorrectPopup"
);

if (closeCorrectPopupButton) {
  closeCorrectPopupButton.addEventListener("click", function () {
    closePopup("correctPopup");
  });
}

if (closeIncorrectPopupButton) {
  closeIncorrectPopupButton.addEventListener("click", function () {
    closePopup("incorrectPopup");
  });
}

function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}

submitButton.addEventListener("click", getAnswer);
closeCorrectPopupButton.addEventListener("click", function () {
  closePopup("correctPopup");
});
closeIncorrectPopupButton.addEventListener("click", function () {
  closePopup("incorrectPopup");
});

function getAnswer() {
  const userAnswer = document.querySelector("#answer").value.toLowerCase();
const answerInput =document.querySelector('#answer');
  if (userAnswer === correctAnswer) {
    showPopup("correctPopup");
  } else {
    showPopup("incorrectPopup");
    answerInput.value = "";
    answerInput.classList.add("game__form-wrong");
  };
};