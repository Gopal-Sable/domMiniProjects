const inputBox = document.querySelector("#inputBox");
const ulElem = document.querySelector("ul");
let todoList = [];
function handleInput(event) {
  let name = event.target.value;
  if (event.keyCode == 13 && name != "") {
    let todo = {
      name,
      isDone: false,
    };
    todoList.push(todo);
    event.target.value = "";
    updateUI();
  }
}

function updateUI() {
  ulElem.innerHTML = "";
  todoList.forEach(({ name, isDone }, idx) => {
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

function handleActions(e) {
  if (e.target.tagName == "SPAN") {
    deleteItem(e);
  } else if (e.target.tagName == "INPUT" && e.target.type == "checkbox") {
    checkIsDone(e);
  }
}
function deleteItem(e) {
  let id = e.target.parentElement.id;
  todoList.splice(id, 1);
  updateUI();
}
function checkIsDone(e) {
  let id = e.target.parentElement.id;
  todoList[id].isDone = e.target.checked;
}

inputBox.addEventListener("keyup", handleInput);
ulElem.addEventListener("click", handleActions);
