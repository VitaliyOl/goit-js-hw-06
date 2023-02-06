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
  let colorChangeRandom = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = colorChangeRandom;
  refs.outputStringColor.textContent = colorChangeRandom;
}
