// Initialize food log array
var foodLog = [];

// Add food to the log and update the UI
function addFood() {
  var foodName = document.getElementById("food-name").value;
  var protein = parseInt(document.getElementById("protein").value);
  var fat = parseInt(document.getElementById("fat").value);
  var carbs = parseInt(document.getElementById("carbs").value);
  var portionSize = parseInt(document.getElementById("portion-size").value);
  
  // Calculate calories
  var calories = (protein * 4) + (carbs * 4) + (fat * 9);
  var totalCalories = parseInt(document.getElementById("total-calories").textContent);
  totalCalories += calories;
  document.getElementById("total-calories").textContent = totalCalories;
  
  // Add food to the log
  var food = {
    foodName: foodName,
    protein: protein,
    fat: fat,
    carbs: carbs,
    portionSize: portionSize,
    calories: calories
  };
  foodLog.push(food);
  
  // Update UI
  var foodLogTable = document.getElementById("food-log");
  var newRow = foodLogTable.insertRow(-1);
  var foodNameCell = newRow.insertCell(0);
  var proteinCell = newRow.insertCell(1);
  var fatCell = newRow.insertCell(2);
  var carbsCell = newRow.insertCell(3);
  var portionSizeCell = newRow.insertCell(4);
  var caloriesCell = newRow.insertCell(5);
  foodNameCell.textContent = foodName;
  proteinCell.textContent = protein;
  fatCell.textContent = fat;
  carbsCell.textContent = carbs;
  portionSizeCell.textContent= portionSize;
  caloriesCell.textContent = calories;
  

  
  // Clear form fields
  document.getElementById("food-name").value = "";
  document.getElementById("protein").value = "";
  document.getElementById("fat").value = "";
  document.getElementById("carbs").value = "";
  document.getElementById("portion-size").value = "";
}

