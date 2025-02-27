const leftSection = document.querySelector(".left");
const rightSection = document.querySelector(".right");
const moveAllLeft = document.querySelector(".move-all-left");
const moveAllRight = document.querySelector(".move-all-right");
const moveLeft = document.querySelector(".move-left");
const moveRight = document.querySelector(".move-right");

function makeEnableDisable(element, btn) {
  if (element) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "");
  }
}
function enableButtons() {
  const leftCheked = document.querySelector(".left input:checked");
  makeEnableDisable(leftCheked, moveRight);

  const rightChecked = document.querySelector(".right input:checked");
  makeEnableDisable(rightChecked, moveLeft);

  const allRights = document.querySelector(".right input");
  makeEnableDisable(allRights, moveAllLeft);
  const allLefts = document.querySelector(".left input");
  makeEnableDisable(allLefts, moveAllRight);
}

function moveItems(fromSelector, toSection, all = false) {
  const selectedEle = document.querySelectorAll(
    `${fromSelector} input${all ? "" : ":checked"}`
  );
  selectedEle.forEach((elem) => {
    if (!all) {
      elem.checked = false;
    }
    toSection.appendChild(elem.parentElement);
  });
}

function moveToLeft() {
  moveItems(".right", leftSection);
}

function moveToRight() {
  moveItems(".left", rightSection);
}

function moveAllToLeft() {
  moveItems(".right", leftSection, true);
}

function moveAllToRight() {
  moveItems(".left", rightSection, true);
}

moveLeft.addEventListener("click", moveToLeft);
moveRight.addEventListener("click", moveToRight);

moveAllRight.addEventListener("click", moveAllToRight);
moveAllLeft.addEventListener("click", moveAllToLeft);

document.querySelector(".container").addEventListener("click", enableButtons);
