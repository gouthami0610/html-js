function getInputValues() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  return { num1, num2 };
}

function add() {
  const { num1, num2 } = getInputValues();
  const result = num1 + num2;
  displayResult(result);
}

function subtract() {
  const { num1, num2 } = getInputValues();
  const result = num1 - num2;
  displayResult(result);
}

function multiply() {
  const { num1, num2 } = getInputValues();
  const result = num1 * num2;
  displayResult(result);
}

function divide() {
  const { num1, num2 } = getInputValues();
  if (num2 === 0) {
    displayResult("Error: Division by zero");
  } else {
    const result = num1 / num2;
    displayResult(result);
  }
}

function displayResult(value) {
  document.getElementById("result").innerHTML = `Result: ${value}`;
}
