var name1 = window.prompt("Please enter your first name");
var name2 = window.prompt("Please enter your last name");

const input_a = document.getElementById("a");
const input_b = document.getElementById("b");
const res = document.getElementById("res");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const array = [];
console.log(name1);

if (name1 != null || name2 != null) {
  const person = { fname: name1, lname: name2 };
  fname.innerHTML = person.fname;
  lname.innerHTML = person.lname;
}

function calculate(input) {
  let a = input_a.valueAsNumber;
  let b = input_b.valueAsNumber;
  if (input.id == "add") {
    res.innerHTML = "result: " + (a + b);
    array.push(a + b);
  } else if (input.id == "divide") {
    res.innerHTML = "result: " + a / b;
    array.push(a / b);
  } else if (input.id == "subtract") {
    res.innerHTML = "result: " + (a - b);
    array.push(a - b);
  } else {
    res.innerHTML = "result: " + a * b;
    array.push(a * b);
  }
}

function pintarr() {
  const print = document.getElementById("arrprint");
  print.innerHTML = "Results stored: " + array;
}

const arr1 = ["john", "Jason", "kevin"];
console.log(arr1);

arr1.unshift("jad");
console.log(arr1);

const arr2 = ["manel", "nahla", "sabine", "mirna"];
console.log(arr2);

const arr3 = arr1.concat(arr2);
console.log(arr3);

console.log("Index of John is " + arr3.indexOf("john"));

console.log("Length of array 3: " + arr3.length);

console.log("Element popped: " + arr3.pop());

console.log("Element shifted: " + arr3.shift());

console.log("Element added to index: " + arr3.push("karem"));

console.log("Reversed Array: " + arr3.reverse());
const arr4 = arr3.slice(0, 3);

console.log(
  "Considering that the array is now reversed, the first 3 elements are: " +
    arr4
);

console.log(arr4.includes("sabine"));

arr3.forEach((num) => {
  console.log(num);
});
