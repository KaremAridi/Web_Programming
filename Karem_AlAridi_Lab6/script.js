console.log("working");
// let name1 = window.prompt("Please enter your first name");
// let name2 = window.prompt("Please enter your last name");

const input_a = document.getElementById("a");
const input_b = document.getElementById("b");
const res = document.getElementById("res");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

if (name1 != NaN || name2 != NaN) {
  const person = { fname: fname, lname: lname };
  fname.innerHTML = person.fname.value;
  lname.innerHTML = person.lname.value;
}

function calculate(input) {
  let a = input_a.valueAsNumber;
  let b = input_b.valueAsNumber;
  if (input.id == "add") {
    res.innerHTML = a + b;
  } else if (input.id == "divide") {
    res.innerHTML = a / b;
  } else if (input.id == "subtract") {
    res.innerHTML = a - b;
  } else {
    res.innerHTML = a * b;
  }
}
