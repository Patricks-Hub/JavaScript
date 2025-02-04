// method is a function in a class

function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square();

function addTwoNumbers() {
  let num1 = 10;
  let num2 = 20;

  let add = num1 + num2;
  console.log(add);
  return add;
}

addTwoNumbers();

function greeting() {
  let message1 = "";
  if (name == null || name === "" || name == undefined) {
    message1 = `Have a great day! `;
  } else {
    message1 = `Have a great day ${name}`;
  }
  return message1;
}

console.log(greeting(""));

function greeting2(name2 = "Awesome Person") {
  let message2 = `Have a great day ${name2}`;

  return message2;
}

console.log(greeting2("Patrick"));

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrayValues([1, 3, 5]));
