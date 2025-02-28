const inputBox = document.querySelector("#inputBox");
const ulElem = document.querySelector("ul");
let listArr = [];
function getInput(event) {
  let name = event.target.value;
  if (event.keyCode == 13 && name != "") {
    let todo = {
      name,
      isDone: false,
    };
    listArr.push(todo);
    event.target.value = "";
    updateUI();
  }
}

function updateUI() {
  ulElem.innerHTML = "";
  listArr.forEach(({ name, isDone }, idx) => {
    ulElem.appendChild(createListElement(idx, name, isDone));
  });
}

function createListElement(idx, name, isDone) {
  const liEle = document.createElement("li");
  const inputEle = document.createElement("input");
  const todoTitleEle = document.createElement("p");
  const deleteEle = document.createElement("span");
  liEle.id = idx;
  liEle.className = "item";
  todoTitleEle.textContent = name;
  inputEle.type = "checkbox";
  inputEle.checked = isDone;
  deleteEle.textContent = "X";

  liEle.append(inputEle, todoTitleEle, deleteEle);
  return liEle;
}

function handleClick(e) {
  if (e.target.tagName == "SPAN") {
    deleteItem(e);
  } else if (e.target.tagName == "INPUT" && e.target.type == "checkbox") {
    checkIsDone(e);
  }
}
function deleteItem(e) {
  let id = e.target.parentElement.id;
  listArr.splice(id, 1);
  updateUI();
}
function checkIsDone(e) {
  let id = e.target.parentElement.id;
  listArr[id].isDone = e.target.checked;
}

inputBox.addEventListener("keyup", getInput);

ulElem.addEventListener("click", handleClick);
