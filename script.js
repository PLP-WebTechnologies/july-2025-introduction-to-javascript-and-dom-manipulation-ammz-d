// =========================
// Part 1: Basics
// =========================

// Variables + Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor ";
  }
});

// =========================
// Part 2: Functions
// =========================

// Function 1: Sum
function calculateSum(a, b) {
  return a + b;
}
document.getElementById("sumBtn").addEventListener("click", function () {
  let result = calculateSum(5, 10);
  document.getElementById("sumResult").textContent = "Sum is: " + result;
});

// Function 2: Greeting
function greetUser(name) {
  return "Hello, " + name + "!";
}
document.getElementById("greetBtn").addEventListener("click", function () {
  let userName = prompt("Enter your name:");
  document.getElementById("greetResult").textContent = greetUser(userName);
});

// =========================
// Part 3: Loops
// =========================

// Loop 1: forEach with Array
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
document.getElementById("listFruitsBtn").addEventListener("click", function () {
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear list before appending
  fruits.forEach(function (fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
});

// Loop 2: while loop - Countdown
document.getElementById("countdownBtn").addEventListener("click", function () {
  let output = "";
  let i = 5;
  while (i > 0) {
    output += i + " ";
    i--;
  }
  document.getElementById("countdownResult").textContent = "Countdown: " + output;
});

// =========================
// Part 4: DOM Manipulation
// =========================

// DOM 1: Change Background
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// DOM 2: Toggle Text
document.getElementById("toggleTextBtn").addEventListener("click", function () {
  let para = document.getElementById("togglePara");
  para.style.display = para.style.display === "none" ? "block" : "none";
});

// DOM 3: Add List Item
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.getElementById("dynamicList").children.length + 1);
  document.getElementById("dynamicList").appendChild(newItem);
});
