const nextBtn = document.getElementById("next");
const clearBtn = document.getElementById("reset");
const progressBar = document.getElementsByClassName("progress-bar")[0];
const headingContainer = document.querySelector("h1");

const heading = {
  1: "Add contact details for further communication",
  2: "Add your shipping address",
  3: "Choose your payment mode",
  4: "Your item delivered",
  5: "Finished",
};

let step = 1;
const maxSteps = 5;
const stepWidth = 33.33;

function updateStep(direction) {
  let width = parseFloat(progressBar.style.width) || 0;

  if (direction === "next" && step < maxSteps) {
    clearBtn.disabled = false;
    let stepNum = document.querySelector(`#step${step}`);
    stepNum.className = "done";
    stepNum.innerHTML = "&#10003;";

    if (step < 4) {
      progressBar.style.width = width + stepWidth + "%";
    }
    step++;
    if (step < maxSteps) {
      stepNum = document.querySelector(`#step${step}`);
      stepNum.className = "active";
      stepNum.textContent = step;
    }

    if (step >= 4) {
      nextBtn.textContent = "Finish";
    }
    if (step == 5) {
      nextBtn.disabled = true;
    }
  } else if (direction === "prev" && step > 1) {
    nextBtn.disabled = false;
    nextBtn.textContent = "Next";
    if (step != 5) {
      progressBar.style.width = width - stepWidth + "%";
      document.querySelector(`#step${step}`).className = "";
      document.querySelector(`#step${step}`).textContent = step;
    }
    step--;
    document.querySelector(`#step${step}`).className = "active";
    document.querySelector(`#step${step}`).textContent = step;
    if (step == 1) {
      clearBtn.disabled = true;
    }
  }

  headingContainer.textContent = heading[step];
}

nextBtn.onclick = () => updateStep("next");

clearBtn.onclick = (e) => updateStep("prev");
