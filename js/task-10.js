function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  containerEl: document.querySelector("#controls"),
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onCreate);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function onCreate() {
  createBoxes(refs.inputEl.value);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.inputEl.value = "";
}

function createBoxes(amount) {
  const element = document.createDocumentFragment("");

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();

    element.append(box);
  }

  refs.boxes.append(element);

}
