const form = document.querySelector("form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  //code that runs when button clicked
  e.preventDefault();
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  const operation = document.querySelector("#operation").value;
  console.log(num1, num2);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter a valid number.");
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error";
      }
      break;
  }

  resultDiv.innerHTML = `<h3>Result: ${result}</h3>`;
});
