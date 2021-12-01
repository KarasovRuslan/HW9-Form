let form = document.getElementById('form');
let ol = document.getElementById('list');
let input = document.getElementById('textInput');
let err = document.createElement("p");

form.addEventListener('submit', addListItem);
ol.addEventListener('click', changeList);

function checkSymbols(value) {
  let regexp = /^([a-zA-Z0-9_-]){2,15}$/gi;
  return regexp.test(value);
}

function addListItem(e) {
  e.preventDefault();
  let notRightData = `Допустимые символы: латинские, </br>цифры, а так же от 2 до 15 символов.`
  if (checkSymbols(input.value)) {
    err.innerText = '';
    let li = createList();
    ol.append(li);
    input.classList.remove("input_error");
  } else {
    input.classList.add("input_error");
    err.innerHTML = notRightData;
    ol.before(err);
  }
}

function deleteBtn() {
  let button = document.createElement("button");
  button.classList.add('deleteButton');
  button.innerText = "delete";
  return button;
}

function createList() {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.className = "notDone";
  let button = deleteBtn();
  li.append(button);
  return li;
}

function isDone(e) {
  e.classList.toggle("done");
}

function changeList(e) {
  let target = e.target;
  if(target.tagName === "BUTTON"){
    target.closest("li").remove();
  } else if (target.tagName === "LI") {
    isDone(target);
  } else
    console.log("err");
}
 