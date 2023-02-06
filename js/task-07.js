const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInput);

function onInput(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}
