const display = document.querySelector(".display");
const CE = document.querySelector(".row-1 button:first-child");
const Del = document.querySelector(".row-1 button:nth-child(2)");
const cal = document.querySelector(".calc");
const num = document.querySelectorAll(".number, .calc");
const dot_ans = document.getElementsByClassName("dot-ans");
const displayInput = document.querySelector(".input");
const displayOutput = document.querySelector(".output");

let input = "";

num.forEach((button) => {
  button.addEventListener("click", function () {
    updateInput(button.textContent);
  });
});

function updateInput(value) {
  input += value;
  displayInput.textContent = input;
}

function updateOutput(value) {
  displayOutput.textContent = value;
}

CE.addEventListener("click", function () {
  input = "";
  updateInput("");
  updateOutput("");
});

Del.addEventListener("click", function () {
  input = input.slice(0, -1);
  updateInput("");
});

// for (var i = 0; i <= 9; i++) {
//   num[i].addEventListener("click", () => {
//     if (value1 != 0) {
//       value1 = value1 * 10 + num[i].textContent;
//     } else {
//       value1 = num[i].textContent;
//     }
//   });
//   display.textContent = value1;
// }

function add() {
  const result = parseFloat(value1) + parseFloat(value2);
  display.textContent = result;
}

function sub() {
  const result = parseFloat(value1) - parseFloat(value2);
  display.textContent = result;
}

function mul() {
  const result = parseFloat(value1) * parseFloat(value2);
  display.textContent = result;
}

function div() {
  const result = parseFloat(value1) / parseFloat(value2);
  display.textContent = result;
}

document.querySelector(".ans").addEventListener("click", function () {
    const result = eval(input);
    updateOutput(result); 
});
