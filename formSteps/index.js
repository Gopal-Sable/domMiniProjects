const nextBtn = document.getElementById("next");
const clearBtn = document.getElementById("reset");
const progressBar = document.getElementsByClassName("progress-bar")[0];
const headingContainer = document.querySelector("h1");

const heading = {
  1: "Add contact details for further communictions",
  2: "Add your shipping address",
  3: "Choose your payment mode",
  4: "Your item delivered",
  5: "finished",
};
let step = 1;
nextBtn.onclick = function (e) {
  let width = progressBar.style.width;
  if (step == 4) {
    let stepNum = document.querySelector(`#step${step}`);
    stepNum.className = "done";
    stepNum.innerHTML = "&#10003;";
    progressBar.style.width = width + 33.33 + "%";
    headingContainer.textContent = heading[++step];
  }
  if (step < 4) {
    if (width == "0%") {
      width = Number(width.toString().slice(0, 1));
    }
    if (width && width != "99.33%") {
      width = Number(width.toString().slice(0, 2));
    }
    let stepNum = document.querySelector(`#step${step}`);
    stepNum.className = "done";
    stepNum.innerHTML = "&#10003;";
    progressBar.style.width = width + 33.33 + "%";
    headingContainer.textContent = heading[++step];
    stepNum = document.querySelector(`#step${step}`);
    stepNum.className = "active";
  }
};

clearBtn.onclick = function (e) {
  e.preventDefault();
  if (step == 5) {
    let stepNum = document.querySelector(`#step${step - 1}`);
    stepNum.className = "active";

    headingContainer.textContent = heading[--step];
    stepNum.textContent = step;
  } else if (step > 1) {
    let width = progressBar.style.width;
    console.log(width);
    if (width != "0%") {
      width = Number(width.toString().slice(0, 2));
    }
    progressBar.style.width = width - 33 + "%";
    let stepNum = document.querySelector(`#step${step}`);

    stepNum.className = "";
    headingContainer.textContent = heading[--step];
    stepNum = document.querySelector(`#step${step}`);
    stepNum.textContent = step;
    stepNum.className = "active";
  }
};
