// // Function to calculate the BMI
// function calculateBMI() {
//   var height = document.getElementById("height-bmi").value;
//   var weight = document.getElementById("weight-bmi").value;
  
//   if (height === "" || weight === "") {
//     document.getElementById("result-bmi").innerHTML = "Please enter your height and weight to calculate your BMI.";
//     return;
//   }

//   var bmi = weight / Math.pow(height / 100, 2);
//   var bmiRounded = bmi.toFixed(1);

//   var weightStatus = "";
//   if (bmi < 18.5) {
//   weightStatus = "Underweight";
//   } else if (bmi >= 18.5 && bmi < 25) {
//   weightStatus = "Normal weight";
//   } else if (bmi >= 25 && bmi < 30) {
//   weightStatus = "Overweight";
//   } else if (bmi >= 30) {
//   weightStatus = "Obese";
//   }
  
  

//   var result = "Your BMI is " + bmiRounded + ". You are " + weightStatus + ".";

//   document.getElementById("result-bmi").innerHTML = result;
// }
 

// // Function to calculate the calorie requirement
// function calculateCalories() {
//   // Get user inputs
//   const activity = document.getElementById("activity").value;
//   const age = parseInt(document.getElementById("age").value);
//   const gender = document.getElementById("gender").value;
//   const weight = parseInt(document.getElementById("weight-bmi").value);
//   const height = parseInt(document.getElementById("height-bmi").value);  


//   // Calculate calories based on user inputs
//   let calories;
//   if (gender === "male") {
//     calories = (10 * weight) + (6.25 * height) - (5 * age) + 5;
//   } else {
//     calories = (10 * weight) + (6.25 * height) - (5 * age) - 161;
//   }
//   calories = Math.round(calories * activity);

//   // Display the result on the page
//   const resultElement = document.getElementById("result");
//   resultElement.innerHTML = `You should consume&nbsp;<span>${calories}</span>&nbsp;calories per day to maintain your weight.`;

// }


// // Event listener for the BMI button
// document.getElementById("bmi-button").addEventListener("click", calculateBMI);

// // Event listener for the calorie button
// document.getElementById("calorie-button").addEventListener("click", calculateCalories);

// function changeMetricSystem() {
//   var system = document.getElementById("metric-system").value;
//   var weightLabel = document.getElementById("weight-label");
//   var heightLabel = document.getElementById("height-label");
//   var weightInput = document.getElementById("weight-input");
//   var heightInput = document.getElementById("height-input");
//   if (system == "metric") {
//     weightLabel.innerHTML = "Weight (kg):";
//     heightLabel.innerHTML = "Height (cm):";
//     weightInput.setAttribute("min", "0");
//     weightInput.setAttribute("max", "500");
//     heightInput.setAttribute("min", "0");
//     heightInput.setAttribute("max", "300");
//   } else {
//     weightLabel.innerHTML = "Weight (lb):";
//     heightLabel.innerHTML = "Height (in):";
//     weightInput.setAttribute("min", "0");
//     weightInput.setAttribute("max", "1000");
//     heightInput.setAttribute("min", "0");
//     heightInput.setAttribute("max", "120");
//   }
// }

function calculateBMI() {
  var height = document.getElementById("height-bmi").value;
  var weight = document.getElementById("weight-bmi").value;
  var metricSystem = document.getElementById("metric-system").value;
  
  if (height === "" || weight === "") {
    document.getElementById("result-bmi").innerHTML = "Please enter your height and weight to calculate your BMI.";
    return;
  }
  
  if (metricSystem === "imperial") {
    // Convert height from inches to cm
    height = height * 2.54;
    // Convert weight from lbs to kg
    weight = weight * 0.45359237;
  }

  var bmi = weight / Math.pow(height / 100, 2);
  var bmiRounded = bmi.toFixed(1);
  
  var weightStatus = "";
  if (bmi < 18.5) {
    weightStatus = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    weightStatus = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    weightStatus = "Overweight";
  } else if (bmi >= 30) {
    weightStatus = "Obese";
  }
  
  if (metricSystem === "metric") {
    var result = "Your BMI is " + bmiRounded + ". You are " + weightStatus + ".";
  } else {
    var result = "Your BMI is " + bmiRounded + ". You are " + weightStatus + ".";
    result += "<br>Your height is " + height.toFixed(1) + " in and your weight is " + weight.toFixed(1) + " lb.";
  }

  document.getElementById("result-bmi").innerHTML = result;
}

function calculateCalories() {
  const activityLevel = document.getElementById("activity").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  
  let bmr;
  if (gender === "male") {
    bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
    bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }
  
  const dailyCalories = bmr * activityLevel;
  
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Your daily calorie intake should be: " + dailyCalories.toFixed(0) + " calories";
}
