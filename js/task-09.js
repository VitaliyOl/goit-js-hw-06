function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  outputStringColor: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body"),
};

refs.btnChangeColor.addEventListener("click", onClick);

function onClick() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.outputStringColor.textContent = getRandomHexColor();
}
