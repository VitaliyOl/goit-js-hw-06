const refs = {
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  valueNumber: document.querySelector("#value"),
};

let counterValue = 0;

const decrement = function decrement() {
  counterValue -= 1;

  refs.valueNumber.textContent = counterValue;
};

const increment = function increment() {
  counterValue += 1;

  refs.valueNumber.textContent = counterValue;
};

refs.buttonDecrement.addEventListener("click", decrement);
refs.buttonIncrement.addEventListener("click", increment);

// const refs = {
//   btnDecrement: document.querySelector('button[data-action="decrement"]'),
//   btnIncrement: document.querySelector('button[data-action="increment"]'),
//   numberValue: document.querySelector("#value"),
// };

// class AdsAndSubtractingNumber {
//   constructor({ rootSelector, initialValue = 0, step = 1 } = {}) {
//     this._rootSelector = rootSelector;
//     this._value = initialValue;
//     this._step = step;
//   }
// }

// AdsAndSubtractingNumber.prototype.decrement = function () {
//   this._value -= this._step;
//   this.updateValue();
// };

// AdsAndSubtractingNumber.prototype.increment = function () {
//   this._value += this._step;
//   this.updateValue();
// };

// AdsAndSubtractingNumber.prototype.updateValue = function () {
//   refs.numberValue.textContent = this._value;
// };

// const counter = new AdsAndSubtractingNumber();

// refs.btnDecrement.addEventListener("click", () => {
//   counter.decrement();
// });

// refs.btnIncrement.addEventListener("click", () => {
//   counter.increment();
// });
