let totalCalories = 0;
let foodList = [];

function addFood() {
let foodName = document.getElementById("foodName").value;
let calories = parseInt(document.getElementById("calories").value);
let portionSize = document.getElementById("portionSize").value;

if (foodName === "" || isNaN(calories) || portionSize === "") {
alert("Please enter a food name, portion size, and calorie count.");
return;
}

totalCalories += calories;
foodList.push({ name: foodName, calories: calories, portionSize: portionSize });
document.getElementById("foodName").value = "";
document.getElementById("calories").value = "";
document.getElementById("portionSize").value = "";
document.getElementById("totalCalories").innerHTML = "Total Calories: " + totalCalories;

let foodListHtml = "";
for (let i = 0; i < foodList.length; i++) {
foodListHtml += foodList[i].name + " (" + foodList[i].portionSize + " - " + foodList[i].calories + " calories)<br>";
}
document.getElementById("ListOfFood").innerHTML = "Food List:<br>" + foodListHtml;
}

function clearList() {
totalCalories = 0;
foodList = [];
document.getElementById("totalCalories").innerHTML = "Total Calories: " + totalCalories;
document.getElementById("ListOfFood").innerHTML = "Food List: ";
}

