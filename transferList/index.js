const leftSection = document.querySelector(".left");
const rightSection = document.querySelector(".right");
const moveAllLeft = document.querySelector(".move-all-left");
const moveAllRight = document.querySelector(".move-all-right");
const moveLeft = document.querySelector(".move-left");
const moveRight = document.querySelector(".move-right");

function enableButtons() {
  const leftCheked = document.querySelector(".left input:checked");
  if (leftCheked) {
    moveRight.removeAttribute("disabled");
  } else {
    moveRight.setAttribute("disabled", "");
  }

  const rightChecked = document.querySelector(".right input:checked");
  if (rightChecked) {
    moveLeft.removeAttribute("disabled");
  } else {
    moveLeft.setAttribute("disabled", "");
  }
}

function moveToLeft(event) {
  const selectedEle = document.querySelectorAll(".right input:checked");
  selectedEle.forEach((elem) => {
    elem.checked = false;
    let parentElement = elem.parentElement;
    leftSection.appendChild(parentElement);
  });
}
function moveToRight(event) {
  const selectedEle = document.querySelectorAll(".left input:checked");
  selectedEle.forEach((elem) => {
    elem.checked = false;
    let parentElement = elem.parentElement;
    rightSection.appendChild(parentElement);
  });
}
function moveAllToLeft(event) {
  const selectedEle = document.querySelectorAll(".right input");
  selectedEle.forEach((elem) => {
    let parentElement = elem.parentElement;
    leftSection.appendChild(parentElement);
  });
}
function moveAllToRight(event) {
  const selectedEle = document.querySelectorAll(".left input");
  selectedEle.forEach((elem) => {
    let parentElement = elem.parentElement;
    rightSection.appendChild(parentElement);
  });
}

moveLeft.addEventListener("click", moveToLeft);
moveRight.addEventListener("click", moveToRight);

moveAllRight.addEventListener("click", moveAllToRight);
moveAllLeft.addEventListener("click", moveAllToLeft);

document.querySelector(".container").addEventListener("click", enableButtons);
